import { Hero } from "@/components/Hero";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/server/get-dictionary";
import Languages from "@/components/Languages";
import Services from "@/components/Services";
import Reasons, { Reason } from "@/components/Reasons";
import { Partners } from "@/components/Partners";
import MasonryTestimonials, {
  Testimonial,
} from "@/components/MasonryTestimonials";
import ContactForm from "@/components/ContactForm";
import Processes from "@/components/Processes";

const o = {
  "tro-choi": "Game",
  "website": "Website",
  "mobile-app": "MobileApp",
  "an-pham-media": "MediaPublication",
} as const;

type Slug = keyof typeof o;
type ServiceKey = (typeof o)[keyof typeof o];

const getKeyFromSlug = (slug: Slug) => o[slug];

export default async function LocalizationServiceDetail({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: Slug };
}) {
  const dict = await getDictionary(lang);
  const key = getKeyFromSlug(slug) as ServiceKey;
  const localization = dict.Solution.items.Localization;
  const mainService = localization.services[key];
  const services = Object.entries(mainService.items);
  const processes = Object.values(mainService.processes);
  const reasons = mainService.reasons as Record<string, Reason>;
  const testimonials = Object.values(dict.Testimonial.masonry) as [Testimonial];

  return (
    <>
      <Hero {...mainService.Hero} />

      <Services
        title={dict.Service.servicesHeading}
        services={services}
        ending={localization.serviceEnding}
      />

      <Processes 
        title={localization.processHeading} 
        processes={processes} 
      />

      <Languages
        title={dict.LanguagesHeading}
        languages={dict.UtilizedLanguages}
      />

      <Reasons
        heading={localization.reasonTitle}
        description={localization.reasonDescription}
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
