import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { Partners } from '@/components/Partners';
import { Testimonials } from '@/components/Testimonials';
import { AboutScrollSection } from '@/components/clients/AboutScrollSection';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Hero
        title={dict.About.Hero.title}
        description={dict.About.Hero.description}
      />
      <Container>
        <p className="font-light leading-8 text-lg">
          {dict.About.Introduction.description1}
        </p>
        <p className="font-light leading-8 mt-8 text-lg">
          {dict.About.Introduction.description2}
        </p>
      </Container>
      <AboutScrollSection
        mission={dict.About.Mission}
        vision={dict.About.Vision}
        values={dict.About.Values}
      />
      <Container className="mt-32">
        <h2 className="text-2xl text-center font-semibold text-slate-900">
          {dict.About.Reason.title}
        </h2>
        {Object.values(dict.About.Reason.items).map((item, index) => {
          return (
            <div className="flex space-x-8 my-16" key={index}>
              <h3 className="text-5xl text-slate-300">{index + 1}</h3>
              <p className="leading-8 mt-4 font-light text-lg">
                <span className="text-3xl mr-2">{item.title}</span>
                {item.description}
              </p>
            </div>
          );
        })}
      </Container>
      <Partners title={dict.Partners.title} />
      <Testimonials {...dict.Testimonial} />
    </>
  );
}
