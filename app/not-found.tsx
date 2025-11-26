import Link from 'next/link';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { getDictionary } from '@/server/get-dictionary';
import { i18n } from '@/i18n-config';

interface NotFoundProps {
  params?: { locale?: string };
}

export default async function NotFound({ params }: NotFoundProps = {}) {
  let locale: string = params?.locale || i18n.defaultLocale;
  const dict = await getDictionary(locale);
  return (
    <Container className="text-center pb-16">
      <div className="flex">
        <Link href={locale === 'en' ? '/en' : '/'} aria-label="Home"></Link>
      </div>
      <h1 className="mt-20 text-lg font-semibold text-gray-900">404</h1>
      <p className="mt-3 text-sm text-gray-700">
        {locale === 'en' ? 'Sorry, this page does not exist.' : 'Xin lỗi, trang này hiện không tồn tại.'}
      </p>
      <Button href={locale === 'en' ? '/en' : '/'} className="mt-10">
        {locale === 'en' ? 'Back to homepage' : 'Về trang chủ'}
      </Button>
    </Container>
  );
}
