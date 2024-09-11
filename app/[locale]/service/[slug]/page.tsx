import Languages from "@/components/Languages";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/server/get-dictionary";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import ServiceSnippet from "@/components/ServiceSnippet";
import { Partners } from "@/components/Partners";
import Reason from "@/components/Reason";

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
  const services = mainService.services;
  const languages = dict.UtilizedLanguages;
  const reasons = mainService.reasons;
  return (
    <article>
      <Hero {...mainService.Hero} />

      <Container className="mt-16">
        <h2 className="text-xl font-semibold text-center">
          {dict.Service.servicesHeading}
        </h2>
        <div className="w-fit mx-auto py-20">
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

      <p className="mb-28 text-center text-xl bg-gradient-radial from-yellow-50 to-white">
        {dict.Service.servicesEnding}
      </p>

      <div className="overflow-hidden mb-16">
        <h2 className="mb-20 text-center text-xl font-bold">
          Các ngôn ngữ đang khai thác
        </h2>
        <Languages languages={languages} />
      </div>

      <Container className="mt-32">
        <h2 className="mb-8 text-xl text-center font-semibold text-slate-900">
          {dict.Service.reasonsHeading}
        </h2>
        <p className="text-center mb-12">{dict.Service.reasonsDescription}</p>
        {Object.values(reasons).map((item, index) => (
          <Reason
            key={index}
            number={index + 1}
            title={item.title}
            description={item.description}
          />
        ))}
      </Container>

      <Partners title={dict.Partners.title} />
    </article>
  );
}
