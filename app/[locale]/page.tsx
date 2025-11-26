import { getDictionary } from '@/server/get-dictionary';
import { Locale } from '@/i18n-config';
import { Hero } from '@/components/Hero';
import { Records } from '@/components/Records';
import { Missions } from '@/components/Missions';
import { Partners } from '@/components/Partners';
import { Solutions } from '@/components/Solutions';
import MasonryTestimonials, { Testimonial } from '@/components/MasonryTestimonials';

export default async function IndexPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return (
    <>
      <Hero {...dict.Home.Hero} />
      <Missions lang={locale} />
      <Solutions lang={locale} />
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
      <MasonryTestimonials
        title={dict.Testimonial.title}
        description={dict.Testimonial.description}
        testimonials={Object.values(dict.Testimonial.masonry) as [Testimonial]}
      />
    </>
  );
}
