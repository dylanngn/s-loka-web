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
  const heroDict = (await getDictionary(lang))['Home']['Hero'];
  const contactFormDict = (await getDictionary(lang))['Home']['ContactForm'];
  return (
    <>
      <Hero {...heroDict} />
      <Missions lang={lang} />
      <Solutions lang={lang} />
      <Records lang={lang} />
      <Partners lang={lang} />
      <ContactForm {...contactFormDict} />
    </>
  );
}
