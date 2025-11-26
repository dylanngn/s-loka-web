import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Ưu tiên lấy lang từ cookie trước
  const cookieLang = request.cookies.get("s-loka-lang")?.value;
  if (cookieLang && i18n.locales.includes(cookieLang)) {
    return cookieLang;
  }
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    [
      "/manifest.json",
      "/favicon.ico",
      "/footer-bg.png",
      // Your other files in `public`
    ].includes(pathname)
  )
    return;

  const cookieLang = request.cookies.get("s-loka-lang")?.value;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }

  // If URL already has a locale, respect it and update cookie to match
  const localeInPath = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (localeInPath) {
    const cookieLang = request.cookies.get("s-loka-lang")?.value;
    // If cookie doesn't match URL locale, update cookie to match URL
    if (cookieLang !== localeInPath) {
      const response = NextResponse.next();
      response.cookies.set("s-loka-lang", localeInPath, {
        path: "/",
        maxAge: 31536000, // 1 year
      });
      return response;
    }
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
