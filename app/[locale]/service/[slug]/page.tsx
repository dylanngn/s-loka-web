import Languages from "@/components/Languages";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/server/get-dictionary";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import Reasons, { Reason } from "@/components/Reasons";
import MasonryTestimonials, {
  Testimonial,
} from "@/components/MasonryTestimonials";
import Services from "@/components/Services";
import { notFound } from "next/navigation";

// Map both VI and EN slugs to dictionary keys
const o = {
  // VI slugs
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
  // EN slugs
  "hotel-service": "hotelService",
  "marketing": "marketing",
  "finance-banking": "financeBanking",
  "ecommerce": "ecommerce",
  "retail": "retail",
  "car-manufacturing": "carManufacturing",
  "energy": "energy",
  "life-science": "lifeScience",
  "information-technology": "IT",
  "it": "IT",
  "advertising": "marketing",
  "automation": "automation",
} as const;
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
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}) {
  const { slug, locale } = await params;
  const dict = await getDictionary(locale);
  const objectKey = getKeyFromSlug(slug as Slug) as DictServiceKey | undefined;
  if (!objectKey) {
    return notFound();
  }
  const mainService = dict.Service.items[objectKey];
  if (!mainService) {
    return notFound();
  }
  const services = Object.entries(mainService.services ?? {});
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
    </article>
  );
}
