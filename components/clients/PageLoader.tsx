'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Normalize path để so sánh chính xác
function normalizePath(path: string): string {
  // Loại bỏ trailing slash và normalize
  return path.replace(/\/$/, '') || '/';
}

// Kiểm tra xem href có trỏ đến cùng trang với pathname không
function isSamePage(href: string, pathname: string): boolean {
  const normalizedHref = normalizePath(href);
  const normalizedPathname = normalizePath(pathname);
  
  // Nếu href là "/", nó trỏ đến trang chủ (có thể là /vi hoặc /en)
  if (normalizedHref === '/') {
    // Trang chủ có thể là /vi, /en, hoặc /
    return normalizedPathname === '/' || 
           normalizedPathname === '/vi' || 
           normalizedPathname === '/en';
  }
  
  // So sánh trực tiếp
  if (normalizedHref === normalizedPathname) {
    return true;
  }
  
  // Kiểm tra nếu pathname kết thúc bằng href (ví dụ: /vi/giai-phap và /giai-phap)
  if (normalizedPathname.endsWith(normalizedHref) && 
      normalizedPathname.length > normalizedHref.length &&
      normalizedPathname[normalizedPathname.length - normalizedHref.length - 1] === '/') {
    return true;
  }
  
  return false;
}

export function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const prevPathnameRef = useRef(pathname);
  const loadingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timer helper
  const clearLoadingTimer = useCallback(() => {
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
      loadingTimerRef.current = null;
    }
  }, []);

  // Set loading với auto-clear sau 500ms
  const setLoadingWithTimeout = useCallback((value: boolean) => {
    clearLoadingTimer();
    setIsLoading(value);
    if (value) {
      loadingTimerRef.current = setTimeout(() => {
        setIsLoading(false);
        loadingTimerRef.current = null;
      }, 500);
    }
  }, [clearLoadingTimer]);

  useEffect(() => {
    // Chỉ hiển thị loading nếu pathname thực sự thay đổi
    if (prevPathnameRef.current !== pathname) {
      setLoadingWithTimeout(true);
      prevPathnameRef.current = pathname;
    } else {
      // Nếu pathname không đổi, đảm bảo loading được tắt ngay lập tức
      clearLoadingTimer();
      setIsLoading(false);
    }

    return () => {
      clearLoadingTimer();
    };
  }, [pathname, searchParams, setLoadingWithTimeout, clearLoadingTimer]);

  // Intercept tất cả các click vào Link để hiển thị loading ngay lập tức
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href]');
      
      if (link) {
        const href = link.getAttribute('href');
        // Chỉ xử lý nếu là internal link và không phải hash link
        if (href && href.startsWith('/') && !href.startsWith('#')) {
          // Kiểm tra xem có phải cùng trang không
          if (isSamePage(href, pathname)) {
            // Cùng trang - tắt loading ngay lập tức và không set timer
            clearLoadingTimer();
            setIsLoading(false);
          } else {
            // Khác trang - hiển thị loading
            setLoadingWithTimeout(true);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      clearLoadingTimer();
    };
  }, [pathname, setLoadingWithTimeout, clearLoadingTimer]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

