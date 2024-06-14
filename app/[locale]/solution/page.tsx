import ContactForm from '@/components/ContactForm';
import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { NavLink } from '@/components/NavLink';
import { Partners } from '@/components/Partners';
import { Testimonials } from '@/components/Testimonials';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';
import Link from 'next/link';

export default async function SolutionPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Hero {...dict.Solution.Hero} />
      <Container className="text-center mt-16">
        <p className="font-light leading-8 text-lg">
          {dict.Solution.Introduction.description1}
        </p>
        <p className="font-light leading-8 mt-8 text-lg">
          {dict.Solution.Introduction.description2}
        </p>
      </Container>
      <Container className="mt-32 mb-16">
        <h2 className="text-2xl font-semibold text-center mb-32">
          {dict.Solution.title}
        </h2>
        <div className="flex flex-col w-full">
          {Object.values(dict.Solution.items).map((item, index) => {
            return (
              <div
                className={`flex space-x-8 sm:w-1/3 mt-16 sm:mt-0 mx-10 ${
                  index % 2 === 0 ? 'self-start' : 'self-end'
                }`}
                key={index}
              >
                <span className="text-4xl text-slate-300">{index + 1}</span>
                <div className="">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="border-t border-slate-800 text-lg leading-8 pt-8 mt-8">
                    {item.description}
                  </p>
                  <Link
                    href="#"
                    className="text-lg text-slate-500 hover:text-primary"
                  >
                    {dict.Solution.readMore}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <Partners title={dict.Partners.title} />
      <Testimonials {...dict.Testimonial} />
      <ContactForm {...dict.ContactForm} />
    </>
  );
}
