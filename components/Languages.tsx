import Malaysia from "@/images/countries/Malaysia.png";
import Italia from "@/images/countries/Italia.png";
import Vietnam from "@/images/countries/Vietnam.png";
import Bulgaria from "@/images/countries/Bulgaria.png";
import Lao from "@/images/countries/Lao.png";
import Philipine from "@/images/countries/Philipine.png";
import Bosnia from "@/images/countries/Bosnia.png";
import Portugal from "@/images/countries/Portugal.png";
import Myanmar from "@/images/countries/Myanmar.png";
import Arab from "@/images/countries/Arab.png";
import Netherlands from "@/images/countries/Netherlands.png";
import Sweden from "@/images/countries/Sweden.png";
import France from "@/images/countries/France.png";
import Ukraine from "@/images/countries/Ukraine.png";
import Thailand from "@/images/countries/Thailand.png";
import Indonesia from "@/images/countries/Indonesia.png";
import Czech from "@/images/countries/Czech.png";
import Poland from "@/images/countries/Poland.png";
import Israel from "@/images/countries/Israel.png";
import Campodia from "@/images/countries/Campodia.png";
import Slovakia from "@/images/countries/Slovakia.png";
import Norway from "@/images/countries/Norway.png";
import Image from "next/image";

const UtilizedLanguages = {
  Malaysian: Malaysia,
  Italian: Italia,
  Vietnamese: Vietnam,
  Bulgarian: Bulgaria,
  Lao: Lao,
  Filipino: Philipine,
  Bosnian: Bosnia,
  Portuguese: Portugal,
  Burmese: Myanmar,
  Arabic: Arab,
  Dutch: Netherlands,
  Swedish: Sweden,
  French: France,
  Ukrainian: Ukraine,
  Thai: Thailand,
  Indonesian: Indonesia,
  Czech: Czech,
  Polish: Poland,
  Jewish: Israel,
  Campodian: Campodia,
  Slovak: Slovakia,
  Norwegian: Norway,
};

export type Languages = keyof typeof UtilizedLanguages;

export default function Languages({
  title,
  languages
}: {
  title: string;
  languages: Record<string, string>;
}) {
  const length = Object.keys(languages).length;
  const split = length / 3;
  const firstRow = Object.entries(languages)
    .slice(0, split)
    .concat(Object.entries(languages).slice(0, split));
  const secondRow = Object.entries(languages)
    .slice(split, 2 * split)
    .concat(Object.entries(languages).slice(split, 2 * split));
  const thirdRow = Object.entries(languages)
    .slice(2 * split)
    .concat(Object.entries(languages).slice(2 * split));
  return (
    <div className="mb-16">
      <h2 className="relative mb-20 text-center text-xl font-bold before:absolute before:left-[calc(50%-12rem)] before:-top-7 before:h-24 before:w-96 before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_90%)] before:opacity-10">
        {title}
      </h2>
      <div className="overflow-x-hidden">
        <ul className="animate-infinite-scroll-slow-left flex items-center justify-center md:justify-start mb-7 [&_img]:max-w-none [&_li]:mx-8">
          {firstRow.map(([key, value], index) => (
            <li
              key={index}
              className="rounded-lg border-2 flex flex-shrink-0 items-center p-2 bg-[#D9D9D933]"
            >
              <Image
                className="w-11 h-7 mr-8"
                alt={key}
                src={UtilizedLanguages[key as Languages]}
              />
              <span className="">{value}</span>
            </li>
          ))}
        </ul>
        <ul className="animate-infinite-scroll-slow-right flex items-center justify-center md:justify-start mb-7 [&_img]:max-w-none [&_li]:mx-8">
          {secondRow.map(([key, value], index) => (
            <li
              key={index}
              className="rounded-lg border-2 flex flex-shrink-0 items-center p-2 bg-[#D9D9D933]"
            >
              <Image
                className="w-11 h-7 mr-8"
                alt={key}
                src={UtilizedLanguages[key as Languages]}
              />
              <span className="">{value}</span>
            </li>
          ))}
        </ul>
        <ul className="animate-infinite-scroll-slow-left flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {thirdRow.map(([key, value], index) => (
            <li
              key={index}
              className="rounded-lg border-2 flex flex-shrink-0 items-center p-2 bg-[#D9D9D933]"
            >
              <Image
                className="w-11 h-7 mr-8"
                alt={key}
                src={UtilizedLanguages[key as Languages]}
              />
              <span className="">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
