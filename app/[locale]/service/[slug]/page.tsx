import Languages from "@/components/Languages";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/server/get-dictionary";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import Reasons, { Reason } from "@/components/Reasons";
import MasonryTestimonials, {
  Testimonial,
} from "@/components/MasonryTestimonials";
import ContactForm from "@/components/ContactForm";
import Services from "@/components/Services";

const o = {
  "dich-vu-khach-san": "hotelService",
  "quang-cao": "marketing",
  "tai-chinh-ngan-hang": "financeBanking",
  "thuong-mai-dien-tu": "ecommerce",
  "ban-le": "retail",
  "san-xuat-o-to": "carManufacturing",
  "nang-luong": "energy",
  "khoa-hoc-doi-song": "lifeScience",
  "cong-nghe-thong-tin": "IT",
  "tu-dong-hoa": "automation",
};
type DictServiceKey =
  | "hotelService"
  | "marketing"
  | "financeBanking"
  | "ecommerce"
  | "retail"
  | "carManufacturing"
  | "energy"
  | "lifeScience"
  | "IT"
  | "automation";
type Slug = keyof typeof o;

const getKeyFromSlug = (slug: Slug) => o[slug];

export default async function ServiceDetailPage({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const objectKey = getKeyFromSlug(slug as Slug) as DictServiceKey;
  const mainService = dict.Service.items[objectKey];
  const services = Object.entries(mainService.services);
  const languages = dict.UtilizedLanguages;
  const reasons = mainService.reasons as Record<string, Reason>;
  const testimonials = Object.values(dict.Testimonial.masonry) as [Testimonial];

  return (
    <article>
      <Hero {...mainService.Hero} />

      <Services
        title={dict.Service.servicesHeading}
        services={services}
        ending={dict.Service.servicesEnding}
      />

      <Languages title={dict.LanguagesHeading} languages={languages} />

      <Reasons
        heading={dict.Service.reasonsHeading}
        description={dict.Service.reasonsDescription}
        reasons={reasons}
      />

      <Partners title={dict.Partners.title} />

      <MasonryTestimonials
        title={dict.Testimonial.title}
        description={dict.Testimonial.description}
        testimonials={testimonials}
      />

      <ContactForm {...dict.ContactForm} />
    </article>
  );
}
