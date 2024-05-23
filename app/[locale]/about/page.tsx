import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { Partners } from '@/components/Partners';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';

export default async function CareerPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Hero
        title={dict.About.Hero.title}
        description={dict.About.Hero.description}
      />
      <Container>
        <p className="font-light leading-8">
          {dict.About.Introduction.description1}
        </p>
        <p className="font-light leading-8 mt-8">
          {dict.About.Introduction.description2}
        </p>
      </Container>
      <Container></Container>
      <Partners title={dict.Partners.title} />
    </>
  );
}
