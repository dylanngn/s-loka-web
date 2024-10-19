import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { Chart } from '@/components/icons/Chart';
import { Coin } from '@/components/icons/Coin';
import { Contact } from '@/components/icons/Contact';
import { Cooperate } from '@/components/icons/Cooperate';
import { Filter } from '@/components/icons/Filter';
import { Like } from '@/components/icons/Like';
import MasonryTestimonials, { Testimonial } from '@/components/MasonryTestimonials';
import { Partners } from '@/components/Partners';
import { Records } from '@/components/Records';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';

export default async function CooperationPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const cooperation = dict.Cooperation
  const items = Object.entries(cooperation.Content.items)
  const testimonials = Object.values(dict.Testimonial.masonry) as [Testimonial];
  const ICONS = {
    Chart,
    Coin,
    Contact,
    Cooperate,
    Filter,
    Like
  } as any;
  return (
    <>
      <Hero {...cooperation.Hero} />
      <Container>
        <h2 className="text-xl font-semibold text-center mb-5">{cooperation.Content.title}</h2>
        <p className="text-center mb-12">{cooperation.Content.description}</p>
        <div className="flex flex-wrap justify-center gap-20">
          {items.map(([key, value]) => {
            const Icon = ICONS[key]
            return (
              <div key={key} className="rounded-3xl border-2 border-gray-400 flex items-center w-64 h-36 p-6">
                <div className="mr-6">
                  <Icon className="h-11 w-11 text-slate-900" aria-hidden="true" />
                </div>
                <p>{value}</p>
              </div>
            )
          })}
        </div>
      </Container>
      <Records
        title={dict.Home.Records.title}
        items={{
          partners: dict.Home.Records.items.partners.title,
          words: dict.Home.Records.items.words.title,
          satisfaction: dict.Home.Records.items.satisfaction.title,
          pairs: dict.Home.Records.items.pairs.title,
        }}
        background={true}
      />
      <Partners title={dict.Partners.title} />
      <MasonryTestimonials
        title={dict.Testimonial.title}
        description={dict.Testimonial.description}
        testimonials={testimonials}
      />
    </>
  );
}
