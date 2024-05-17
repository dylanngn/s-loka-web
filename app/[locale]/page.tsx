import { getDictionary } from '@/server/get-dictionary';
import { Locale } from '@/i18n-config';
import { Hero } from '@/components/Hero';
import { Records } from '@/app/[locale]/components/Records';
import { Missions } from '@/app/[locale]/components/Missions';
import { Partners } from '@/app/[locale]/components/Partners';
import { Solutions } from '@/app/[locale]/components/Solutions';
import ContactForm from '@/app/[locale]/components/ContactForm';

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
