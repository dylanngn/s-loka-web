import { Container } from '@/components/Container';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';

export default async function CareerPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = (await getDictionary(lang))['Career']['Main'];
  return (
    <>
      <Container className="text-center">
        <h2 className="text-xl font-semibold text-slate-900">
          {dict.Introduction.title}
        </h2>
        <p>{dict.Introduction.description1}</p>
      </Container>
    </>
  );
}
