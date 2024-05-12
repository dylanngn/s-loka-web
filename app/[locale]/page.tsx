// import { Hero } from '@/components/Hero';
// import { BrandSlider } from '@/components/BrandSlider';
// import { KeyNotes } from '@/components/KeyNotes';
// import { Solutions } from '@/components/Solutions';
// import { Statistics } from '@/components/Staistics';
// import { Footer } from '@/components/Footer';
// import { Header } from '@/components/Header';
import { getDictionary } from "@/server/get-dictionary";
import { Locale } from "@/i18n-config";
import { Hero } from "@/app/[locale]/components/Hero";
import { Records } from "@/app/[locale]/components/Records";
import { Missions } from "@/app/[locale]/components/Missions";
import { Partners } from "@/app/[locale]/components/Partners";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Hero dictionary={dict.Hero} />
      <Missions lang={lang} />
      <Records lang={lang} />
      <Partners lang={lang} />
    </>
  );
}
