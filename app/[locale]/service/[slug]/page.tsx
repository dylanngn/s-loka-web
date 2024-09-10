import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import ServiceSnippet from "@/components/ServiceSnippet";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/server/get-dictionary";

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
type OKey =
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
type Slug =
  | "dich-vu-khach-san"
  | "quang-cao"
  | "tai-chinh-ngan-hang"
  | "thuong-mai-dien-tu"
  | "ban-le"
  | "san-xuat-o-to"
  | "nang-luong"
  | "khoa-hoc-doi-song"
  | "cong-nghe-thong-tin"
  | "tu-dong-hoa";

const getKeyFromSlug = (slug: Slug) => o[slug];

export default async function ServiceDetailPage({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const objectKey = getKeyFromSlug(slug as Slug) as OKey;
  const services = dict.Service.items[objectKey].services
  return (
    <article>
      <Hero {...dict.Service.items[objectKey].Hero} />
      <Container className="mt-16">
        <h2 className="text-3xl font-semibold text-center">
          {dict.Service.servicesHeading}
        </h2>
        <div className="py-20">
          {Object.entries(services).map(([key, value]) => (
            <ServiceSnippet
              key={key}
              number={key}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Container>
      <p className="mb-28 text-center text-3xl bg-gradient-radial from-yellow-50 to-white">{dict.Service.servicesEnding}</p>
    </article>
  );
}
