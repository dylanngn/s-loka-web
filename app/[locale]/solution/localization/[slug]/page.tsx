import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/server/get-dictionary";
import Languages from "@/components/Languages";
import Services from "@/components/Services";
import clsx from "clsx";
import Reasons, { Reason } from "@/components/Reasons";
import { Partners } from "@/components/Partners";
import MasonryTestimonials, { Testimonial } from "@/components/MasonryTestimonials";
import ContactForm from "@/components/ContactForm";

const o = {
  game: "Game",
  website: "Website",
  "mobile-app": "MobileApp",
  "media-publication": "MediaPublication",
};
type DictServiceKey = "Game" | "Website" | "MobileApp" | "MediaPublication";

type Slug = keyof typeof o;

const getKeyFromSlug = (slug: Slug) => o[slug];

export default async function SolutionServiceDetail({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: Slug };
}) {
  const dict = await getDictionary(lang);
  const key = getKeyFromSlug(slug) as DictServiceKey;
  const localization = dict.Solution.items.Localization;
  const mainService = localization.services[key];
  const services = Object.entries(mainService.items);
  const processes = mainService.processes;
  const reasons = Object.values(mainService.reasons) as [Reason];

  const testimonials = Object.entries(dict.Testimonial.masonry).map(
    ([key, value]) => value
  ) as [Testimonial];

  return (
    <>
      <Hero {...mainService.Hero} />

      <Services
        title={dict.Service.servicesHeading}
        services={services}
        ending={localization.serviceEnding}
      />

      <Container className="mt-32 mb-16">
        <h2 className="text-2xl font-semibold text-center mb-32">
          {localization.processHeading}
        </h2>
        <div className="flex flex-col w-full">
          {Object.values(processes).map((item, index) => {
            return (
              <div
                className={clsx(
                  "flex space-x-8 sm:w-1/3 mt-16 sm:mt-0 mx-10",
                  index % 2 === 0 ? "self-start" : "self-end"
                )}
                key={index}
              >
                <span className="text-4xl text-slate-300">{index + 1}</span>
                <div className="">
                  <h3 className="mb-4 pb-5 text-2xl font-semibold text-slate-900 border-b border-slate-800">
                    {item.title}
                  </h3>
                  {Object.values(item.descriptions).map((value, index) => (
                    <p key={index} className="text-lg leading-8 mb-5">
                      {value}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>

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
