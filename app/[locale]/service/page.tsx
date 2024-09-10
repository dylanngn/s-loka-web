import ContactForm from '@/components/ContactForm';
import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { Partners } from '@/components/Partners';
import { Testimonials } from '@/components/Testimonials';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';
import { Banking } from '@/components/icons/Banking';
import { Ecommerce } from '@/components/icons/Ecommerce';
import { Energy } from '@/components/icons/Energy';
import { Hotel } from '@/components/icons/Hotel';
import { IT } from '@/components/icons/IT';
import { Manufactor } from '@/components/icons/Manufactor';
import { Marketing } from '@/components/icons/Marketing';
import { Medical } from '@/components/icons/Medical';
import { Retail } from '@/components/icons/Retail';
import { Automation } from '@/components/icons/Automation';
import { ServiceArrow } from '@/components/icons/ServiceArrow';

const ICONS = {
  marketing: Marketing,
  hotelService: Hotel,
  energy: Energy,
  financeBanking: Banking,
  ecommerce: Ecommerce,
  IT: IT,
  retail: Retail,
  carManufacturing: Manufactor,
  lifeScience: Medical,
  automation: Automation,
} as any;

export default async function ServicePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Hero {...dict.Service.Hero} />
      <Container className="text-center mt-16 flex flex-col">
        <h2 className="text-xl font-semibold text-center sm:mb-32 mb-24">
          {dict.Service.title}
        </h2>
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-16 gap-8 place-items-center">
          {Object.entries(dict.Service.items)
            .slice(0, 6)
            .map(([key, value]) => {
              const Icon = ICONS[key] ?? null;
              return (
                <div
                  key={key}
                  className="flex flex-col sm:w-72 w-full sm:h-32 h-36  text-left hover:border-primary border-slate-400 border-2 gap-2 px-4 py-6 rounded-xl items-center justify-center"
                >
                  <div className="block">
                    {Icon && <Icon className="w-6 block" />}
                  </div>
                  <a href={value.href} className="font-sm flex gap-2 flex-col sm:flex-row items-center font-light text-center mt-2">
                    {value.title}
                    <ServiceArrow className="w-6 inline-block" />
                  </a>
                </div>
              );
            })}
        </div>
        <div className="grid grid-cols-2 sm:gap-16 gap-8 sm:mt-20 mt-8 self-center place-items-center">
          {Object.entries(dict.Service.items)
            .slice(6)
            .map(([key, value]) => {
              const Icon = ICONS[key] ?? null;
              return (
                <div
                  key={key}
                  className="flex flex-col sm:w-72 w-full sm:h-32 h-36 text-left sm:mx-4 hover:border-primary border-slate-400 border-2 gap-2 px-4 py-6 rounded-xl items-center justify-center"
                >
                  <div className="block">
                    {Icon && <Icon className="w-6 block" />}
                  </div>
                  <span className="font-sm flex gap-2 flex-col sm:flex-row items-center font-light text-center mt-2">
                    {value.title}
                    <ServiceArrow className="w-6 inline-block" />
                  </span>
                </div>
              );
            })}
        </div>
      </Container>
      <Container className="mt-32">
        <h2 className="text-xl text-center font-semibold text-slate-900">
          {dict.Service.Reason.title}
        </h2>
        {Object.values(dict.Service.Reason.items).map((item, index) => {
          return (
            <div className="flex space-x-8 my-16" key={index}>
              <h3 className="text-4xl text-slate-300">{index + 1}</h3>
              <p className="leading-8 mt-4 font-light text-md">
                <span className="text-2xl mr-2">{item.title}</span>
                {item.description}
              </p>
            </div>
          );
        })}
      </Container>
      <Partners title={dict.Partners.title} />
      <Testimonials {...dict.Testimonial} />
      <ContactForm {...dict.ContactForm} />
    </>
  );
}
