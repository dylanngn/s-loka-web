import { Hero } from "@/components/Hero";
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
  // VI slugs
  "phien-dich-thap-tung": "Escort",
  "phien-dich-lu-hanh": "Tour",
  "phien-dich-du-lich": "Travel",
  "phien-dich-kinh-doanh": "Business",
  "phien-dich-trien-lam-thuong-mai": "TradeShow",
  "phien-dich-song-song": "Silmutaneous",
  // EN slugs
  "accompanying": "Escort",
  "hospitality": "Tour",
  "travel": "Travel",
  "business": "Business",
  "trade-show": "TradeShow",
  "trade-fair": "TradeShow",
  "simultaneous": "Silmutaneous",
} as const;

type Slug = keyof typeof o;
type ServiceKey = typeof o[keyof typeof o];

const getKeyFromSlug = (slug: Slug) => o[slug];

export default async function InterpretationServiceDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: Slug }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);
  const key = getKeyFromSlug(slug) as ServiceKey | undefined;
  if (!key) return notFound();
  const interpretation = dict.Solution.items?.Interpretation;
  if (!interpretation) return notFound();
  const mainService = interpretation.services?.[key];
  if (!mainService) return notFound();
  const services = Object.entries(mainService.items ?? {});
  const processes = Object.values(mainService.processes ?? {});
  const reasons = (mainService.reasons as Record<string, Reason>) ?? {};
  const testimonials = Object.values(dict.Testimonial.masonry) as [Testimonial];

  return (
    <>
      <Hero {...mainService.Hero} />

      <Services
        title={dict.Service.servicesHeading}
        services={services}
        ending={interpretation.serviceEnding}
      />

      <Processes title={interpretation.processHeading} processes={processes}/>

      <Languages
        title={dict.LanguagesHeading}
        languages={dict.UtilizedLanguages}
      />

      <Reasons
        heading={interpretation.reasonTitle}
        description={interpretation.reasonDescription}
        reasons={reasons}
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
