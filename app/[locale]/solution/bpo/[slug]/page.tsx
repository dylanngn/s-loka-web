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
  "ho-tro-ai": "AIAssistant",
  "call-center": "CallCenter",
  "so-hoa-tai-lieu": "Digitization",
} as const;

type Slug = keyof typeof o;
type ServiceKey = typeof o[keyof typeof o];

const getKeyFromSlug = (slug: Slug) => o[slug];

interface MainService {
  Hero: { title: string; description: string };
  serviceHeading: string;
  serviceEnding: string;
  items: Record<string, any>;
  benefitHeading?: string;
  benefits?: Record<string, any>;
  processes?: Record<string, any>;
  reasons: Record<string, any>;
}

export default async function BPOServiceDetail({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: Slug };
}) {
  const dict = await getDictionary(lang);
  const key = getKeyFromSlug(slug) as ServiceKey;
  const bpo = dict.Solution.items.BPO;
  const mainService = bpo.services[key] as unknown as MainService;
  const services = Object.entries(mainService.items);
  const processes = mainService.processes
  ? Object.values(mainService.processes)
  : null;
  const benefits = mainService.benefits
  const reasons = mainService.reasons as Record<string, Reason>;
  const testimonials = Object.values(dict.Testimonial.masonry) as [Testimonial];

  return (
    <>
      <Hero {...mainService.Hero} />

      <Services
        title={mainService.serviceHeading}
        services={services}
        ending={mainService.serviceEnding}
      />

      {benefits && <Reasons heading={mainService.benefitHeading as string} description={""} reasons={benefits}/>}
      
      {processes && <Processes title={bpo.processHeading} processes={processes}/>}

      <Languages
        title={dict.LanguagesHeading}
        languages={dict.UtilizedLanguages}
      />

      <Reasons
        heading={bpo.reasonTitle}
        description={bpo.reasonDescription}
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
