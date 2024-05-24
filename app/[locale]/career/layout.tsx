import { Suggestions } from '@/components/clients/CareerSuggestions';
import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { Locale } from '@/i18n-config';
import { getAllJob } from '@/server/get-all-job';
import { getDictionary } from '@/server/get-dictionary';

export default async function CareerLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const jobs = await getAllJob();
  const dict = await getDictionary(lang);
  const suggestionDict = (await getDictionary(lang))['Career']['Suggestion'];
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
