import { Suggestions } from '@/components/clients/CareerSuggestions';
import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { Locale } from '@/i18n-config';
import { getCategorizedJob } from '@/server/get-all-job';
import { getDictionary } from '@/server/get-dictionary';

export default async function CareerLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  const jobs = await getCategorizedJob();
  const dict = await getDictionary(locale);
  const suggestionDict = (await getDictionary(locale))['Career']['Suggestion'];
  return (
    <>
      <Hero {...dict.Career.Hero} />
      {children}
      <Container className="text-center mt-16 pb-16">
        <h2 className="text-xl font-semibold text-slate-900">
          {suggestionDict.title}
        </h2>
        <p className="font-light leading-7 my-10">
          {suggestionDict.description}
        </p>
      </Container>
      <Suggestions jobs={jobs} sections={suggestionDict.sections} />
    </>
  );
}
