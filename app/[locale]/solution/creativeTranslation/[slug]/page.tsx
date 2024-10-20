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
  "dich-sang-tao-la-gi": "Definition",
  "quy-trinh-dich-sang-tao": "Process",
  "ban-dia-hoa-marketing": "LocalizationMarketing",
  "ban-dia-hoa-game": "LocalizationGame",
  "ban-dia-hoa-ui-ux-app": "LocalizationUIUXApp",
  "copy-writing": "CopyWriting",
  "content-writing": "ContentWriting"
} as const;

type Slug = keyof typeof o;
type ServiceKey = (typeof o)[keyof typeof o];

const getKeyFromSlug = (slug: Slug) => o[slug];

interface MainService {
  Hero: { title: string; description: string };
  serviceHeading: string;
  serviceEnding: string;
  definitionTitle: string;
  definitionDescription: string;
  definitions: Record<string, { title: string; description: string; list?: Record<string, string> }>;
  items?: Record<string, any>;
  processes?: Record<string, any>;
  reasons?: Record<string, any>;
}

export default async function CreativeTranslationServiceDetail({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: Slug };
}) {
  const dict = await getDictionary(lang);
  const key = getKeyFromSlug(slug) as ServiceKey;
  const creativeTranslation = dict.Solution.items.CreativeTranslation;
  const mainService = creativeTranslation.services[key] as unknown as MainService;
  const definitions = mainService.definitions ?? null 
  const services = mainService.items ? Object.entries(mainService.items) : null;
  const processes = mainService.processes
    ? Object.values(mainService.processes)
    : null;
  const reasons = mainService.reasons ?? null;
  const testimonials = Object.values(dict.Testimonial.masonry) as [Testimonial];

  return (
    <>
      <Hero {...mainService.Hero} />

      {definitions && (
        <Reasons
          heading={mainService.definitionTitle}
          description={mainService.definitionDescription}
          reasons={definitions}
        />
      )}

      {services && (
        <Services
          title={mainService.serviceHeading}
          services={services}
          ending={mainService.serviceEnding}
        />
      )}

      {processes && (
        <Processes
          title={creativeTranslation.processHeading}
          processes={processes}
        />
      )}

      <Languages
        title={dict.LanguagesHeading}
        languages={dict.UtilizedLanguages}
      />

      {reasons && (
        <Reasons
          heading={reasons.reasonTitle}
          description={reasons.reasonDescription}
          reasons={reasons.items}
        />
      )}

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
