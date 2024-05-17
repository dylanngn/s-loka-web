import { CareerFooter } from '@/app/[locale]/career/components/CareerFooter';
import { JobHeader } from '@/app/[locale]/career/components/JobHeader';
import { Hero } from '@/components/Hero';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';

export default async function CareerLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const heroDict = (await getDictionary(lang))['Career']['Hero'];
  return (
    <>
      <Hero {...heroDict} />
      <JobHeader />
      {children}
      <CareerFooter />
    </>
  );
}
