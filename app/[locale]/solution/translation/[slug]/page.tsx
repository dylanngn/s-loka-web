import { Hero } from "@/components/Hero";
import { getDictionary } from "@/server/get-dictionary";
import Languages from "@/components/Languages";
import Services from "@/components/Services";
import Reasons, { Reason } from "@/components/Reasons";
import { Partners } from "@/components/Partners";
import MasonryTestimonials, { Testimonial } from "@/components/MasonryTestimonials";
import Processes from "@/components/Processes";
import { notFound } from "next/navigation";

// Map VI and EN slugs to service keys
const o = {
  // VI
  "dich-thuat-cong-chung": "Notary",
  "dich-thuat-chuyen-nganh": "Major",
  // EN
  "notarized": "Notary",
  "major": "Major",
  "specialized": "Major",
  "industry": "Major",
} as const;
type Slug = keyof typeof o;
type ServiceKey = (typeof o)[keyof typeof o];

const getKeyFromSlug = (slug: Slug) => o[slug];

export default async function TranslationServiceDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: Slug }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);
  const key = getKeyFromSlug(slug) as ServiceKey | undefined;
  if (!key) {
    return notFound();
  }
  const translation = dict.Solution.items.Translation;
  if (!translation) {
    return notFound();
  }
  const mainService = translation.services?.[key];
  if (!mainService) {
    return notFound();
  }
  const services = Object.entries(mainService.items ?? {});
  const processes = Object.values(mainService.processes ?? {});
  const reasons = mainService.reasons as Record<string, Reason>;
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
    </>
  );
}
