'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import clsx from 'clsx';
import { i18n } from '@/i18n-config';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || '/';
  const [cookieLang, setCookieLang] = useState<string | null>(null);

  const segments = pathname.split('/');
  // Nếu có locale trên path thì ưu tiên path, nếu không thì state cookie (chỉ hoạt động trên client!)
  const detectedLang = i18n.locales.includes(segments[1] as any)
    ? (segments[1] as (typeof i18n)['locales'][number])
    : (cookieLang && i18n.locales.includes(cookieLang as any)
        ? (cookieLang as (typeof i18n)['locales'][number])
        : i18n.defaultLocale);

  // Đọc lang từ cookie nếu có
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const match = document.cookie.match(/(^| )s-loka-lang=([^;]+)/);
      if(match && i18n.locales.includes(match[2] as any)) {
        setCookieLang(match[2]);
      }
    }
  }, [pathname]);

  const flagByLocale: Record<(typeof i18n)['locales'][number], string> = {
    vi: '🇻🇳',
    en: '🇬🇧',
  };

  function buildPath(target: (typeof i18n)['locales'][number]) {
    const viToEnSecond: Record<string, string> = {
      'giai-phap': 'solution',
      'chuyen-nganh': 'service',
      've-sloka': 'about',
      'bai-viet': 'post',
      'hop-tac': 'cooperation',
    };
    const enToViSecond: Record<string, string> = {
      'solution': 'giai-phap',
      'service': 'chuyen-nganh',
      'about': 've-sloka',
      'post': 'bai-viet',
      'cooperation': 'hop-tac',
    };

    const viToEnSolutionThird: Record<string, string> = {
      'ban-dia-hoa': 'localization',
      'dich-thuat': 'translation',
      'phien-dich': 'interpretation',
      'dich-sang-tao': 'creativeTranslation',
      'bpo': 'bpo',
    };
    const enToViSolutionThird: Record<string, string> = {
      'localization': 'ban-dia-hoa',
      'translation': 'dich-thuat',
      'interpretation': 'phien-dich',
      'creativeTranslation': 'dich-sang-tao',
      'bpo': 'bpo',
    };

    if (i18n.locales.includes(segments[1] as any)) {
      const nextSegments = [...segments];
      nextSegments[1] = target;

      // Map second-level segment between VI/EN if present
      if (nextSegments.length > 2) {
        if (target === 'en') {
          nextSegments[2] = viToEnSecond[nextSegments[2]] || nextSegments[2];
        } else {
          nextSegments[2] = enToViSecond[nextSegments[2]] || nextSegments[2];
        }
      }

      // If under solution, map third segment (category) as well
      if (nextSegments.length > 3) {
        const second = nextSegments[2];
        if ((target === 'en' && second === 'solution') || (target === 'vi' && second === 'giai-phap')) {
          if (target === 'en') {
            nextSegments[3] = viToEnSolutionThird[nextSegments[3]] || nextSegments[3];
          } else {
            nextSegments[3] = enToViSolutionThird[nextSegments[3]] || nextSegments[3];
          }
        }
      }

      return nextSegments.join('/') || '/';
    }
    return `/${target}${pathname.startsWith('/') ? '' : '/'}${pathname}`;
  }

  function switchTo(target: (typeof i18n)['locales'][number]) {
    const nextPath = buildPath(target);
    document.cookie = `s-loka-lang=${target}; path=/; max-age=31536000`;
    router.push(nextPath);
    setCookieLang(target);
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={clsx(
            'inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm border',
            'bg-white text-secondary border-secondary/40 hover:bg-secondary/5'
          )}
          aria-label="Change language"
        >
          <span className="text-base leading-none">{flagByLocale[detectedLang]}</span>
          <span>{detectedLang.toUpperCase()}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="py-1">
            {i18n.locales.map((loc) => (
              <Menu.Item key={loc}>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={() => switchTo(loc)}
                    className={clsx(
                      'block w-full px-3 py-1.5 text-left text-sm',
                      loc === detectedLang
                        ? 'bg-secondary text-white'
                        : active
                        ? 'bg-secondary/5 text-secondary'
                        : 'text-secondary'
                    )}
                    aria-pressed={loc === detectedLang}
                  >
                    <span className="mr-2 text-base leading-none">{flagByLocale[loc]}</span>
                    <span>{loc.toUpperCase()}</span>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}


