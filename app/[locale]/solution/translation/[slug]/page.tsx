import { Hero } from "@/components/Hero";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/server/get-dictionary";
import Languages from "@/components/Languages";
import Services from "@/components/Services";
import Reasons, { Reason } from "@/components/Reasons";
import { Partners } from "@/components/Partners";
import MasonryTestimonials, { Testimonial } from "@/components/MasonryTestimonials";
import ContactForm from "@/components/ContactForm";
import Processes from "@/components/Processes";

const o = {
  "dich-thuat-cong-chung": "Notary",
  "dich-thuat-chuyen-nganh": "Major",
} as const;
type Slug = keyof typeof o;
type ServiceKey = (typeof o)[keyof typeof o];

const getKeyFromSlug = (slug: Slug) => o[slug];

export default async function TranslationServiceDetail({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: Slug };
}) {
  const dict = await getDictionary(lang);
  const key = getKeyFromSlug(slug) as ServiceKey;
  const translation = dict.Solution.items.Translation;
  const mainService = translation.services[key];
  const services = Object.entries(mainService.items);
  const processes = Object.values(mainService.processes);
  const reasons = Object.values(mainService.reasons) as [Reason];
  const testimonials = Object.values(dict.Testimonial.masonry) as [Testimonial];

  return (
    <>
      <Hero {...mainService.Hero} />

      <Services
        title={dict.Service.servicesHeading}
        services={services}
        ending={translation.serviceEnding}
      />

      <Processes title={translation.processHeading} processes={processes}/>

      <Languages
        title={dict.LanguagesHeading}
        languages={dict.UtilizedLanguages}
      />

      <Reasons
        heading={translation.reasonTitle}
        description={translation.reasonDescription}
        reasons={reasons}
      />

      <Partners title={dict.Partners.title} />

      <MasonryTestimonials
        title={dict.Testimonial.title}
        description={dict.Testimonial.description}
        testimonials={testimonials}
      />

      <ContactForm {...dict.ContactForm} />
    </>
  );
}
