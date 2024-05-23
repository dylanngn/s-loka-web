import { getDictionary } from '@/server/get-dictionary';
import { Locale } from '@/i18n-config';
import { Hero } from '@/components/Hero';
import { Records } from '@/components/Records';
import { Missions } from '@/components/Missions';
import { Partners } from '@/components/Partners';
import { Solutions } from '@/components/Solutions';
import ContactForm from '@/components/ContactForm';

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Hero {...dict.Home.Hero} />
      <Missions lang={lang} />
      <Solutions lang={lang} />
      <Records
        title={dict.Home.Records.title}
        items={{
          partners: dict.Home.Records.items.partners.title,
          words: dict.Home.Records.items.words.title,
          satisfaction: dict.Home.Records.items.satisfaction.title,
          pairs: dict.Home.Records.items.pairs.title,
        }}
      />
      <Partners title={dict.Partners.title} />
      <ContactForm {...dict.ContactForm} />
    </>
  );
}
