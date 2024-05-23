import ContactForm from '@/components/ContactForm';
import { Hero } from '@/components/Hero';
import { Partners } from '@/components/Partners';
import { Testimonials } from '@/components/Testimonials';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';

export default async function SolutionPage({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Hero {...dict.Solution.Hero} />
      <Partners title={dict.Partners.title} />
      <Testimonials {...dict.Testimonial} />
      <ContactForm {...dict.ContactForm} />
    </>
  );
}
