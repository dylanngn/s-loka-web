import Link from 'next/link';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { cookies } from 'next/headers';
import { i18n, Locale } from '@/i18n-config';

export default async function NotFound() {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get('s-loka-lang')?.value as string | undefined;
  const locale: Locale = (i18n.locales as readonly string[]).includes(cookieLang || '')
    ? (cookieLang as Locale)
    : i18n.defaultLocale;

  return (
    <Container className="text-center pb-16">
      <div className="flex">
        <Link href={`/${locale}`} aria-label="Home"></Link>
      </div>
      <h1 className="mt-20 text-lg font-semibold text-gray-900">404</h1>
      <p className="mt-3 text-sm text-gray-700">
        {locale === 'en' ? 'Sorry, this page does not exist.' : 'Xin lỗi, trang này hiện không tồn tại.'}
      </p>
      <Button href={`/${locale}`} className="mt-10">
        {locale === 'en' ? 'Back to homepage' : 'Về trang chủ'}
      </Button>
    </Container>
  );
}
