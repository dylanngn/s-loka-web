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
  const impressiveNumbers = cooperation.ImpressiveNumbers
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
      <Container className="py-28">
        <h2 className="text-xl font-semibold text-center mb-12">{impressiveNumbers.title}</h2>
        <div className="flex flex-wrap justify-center gap-10">
        {Object.entries(impressiveNumbers.items).map(([key, value]) => (
          <div key={key} className="rounded-3xl border-2 border-gray-300 shadow flex flex-col justify-center items-center w-full md:w-64 lg:w-[calc(25%-2rem)] h-48 gap-6">
            <span className="text-4xl text-[#0052B4]">{value.number}</span>
            <p>{value.title}</p>
          </div>
        ))}
        </div>
      </Container>
      <Partners title={dict.Partners.title} />
      <MasonryTestimonials
        title={dict.Testimonial.title}
        description={dict.Testimonial.description}
        testimonials={testimonials}
      />
    </>
  );
}
