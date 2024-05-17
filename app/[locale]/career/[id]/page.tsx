import { Hero } from '@/components/Hero';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';

export default async function CareerDetailPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <>
      <div>comp page</div>
    </>
  );
}
