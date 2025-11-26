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
import Processes from "@/components/Processes";
import { notFound } from "next/navigation";

const o = {
  "tro-choi": "Game",
  "website": "Website",
  "mobile-app": "MobileApp",
  "an-pham-media": "MediaPublication",
  // EN aliases
  "game": "Game",
  "media": "MediaPublication",
} as const;

type Slug = keyof typeof o;
type ServiceKey = (typeof o)[keyof typeof o];

const getKeyFromSlug = (slug: Slug) => o[slug];

interface MainService {
  Hero: { title: string; description: string };
  serviceHeading: string;
  serviceEnding: string;
  items?: Record<string, unknown>;
  processes?: Record<string, unknown>;
  reasons?: Record<string, Reason> | Record<string, unknown>;
}

export default async function LocalizationServiceDetail({
  params,
}: {
  params: Promise<{ locale: Locale; slug: Slug }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);
  const key = getKeyFromSlug(slug) as ServiceKey;
  const localization = dict.Solution.items.Localization;
  const mainService = localization.services[key] as unknown as MainService | undefined;

  if (!mainService) {
    return notFound();
  }

  const services = mainService.items ? (Object.entries(mainService.items) as [string, { title: string; description: string }][]) : null;
  const processes = mainService.processes ? Object.values(mainService.processes) : null;
  const reasons = (mainService.reasons as Record<string, Reason>) ?? null;
  const testimonials = Object.values(dict.Testimonial.masonry) as [Testimonial];

  return (
    <>
      <Hero {...mainService.Hero} />

      {services && (
        <Services
          title={dict.Service.servicesHeading}
          services={services}
          ending={localization.serviceEnding}
        />
      )}

      {processes && (
        <Processes 
          title={localization.processHeading} 
          processes={processes} 
        />
      )}

      <Languages
        title={dict.LanguagesHeading}
        languages={dict.UtilizedLanguages}
      />

      {reasons && (
        <Reasons
          heading={localization.reasonTitle}
          description={localization.reasonDescription}
          reasons={reasons}
        />
      )}

      <Partners title={dict.Partners.title} />

      <MasonryTestimonials
        title={dict.Testimonial.title}
        description={dict.Testimonial.description}
        testimonials={testimonials}
      />
    </>
  );
}
