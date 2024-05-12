import Image from 'next/image';
import { PARTNERS } from '@/constants/partners';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';

export async function Partners({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-24">
      <h2 className="text-xl font-semibold text-slate-900">
        {dict.Partners.title}
      </h2>
      <div className="sm:12 sm:mt-18 mx-auto mt-16 inline-flex h-20 w-full max-w-2xl flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_124px,_black_calc(100%-124px),transparent_100%)] lg:mt-20 lg:h-24 lg:max-w-none">
        <ul
          x-ref="logos"
          className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        >
          {PARTNERS.map((partner) => (
            <li key={partner.name}>
              <Image
                src={partner.image}
                alt={partner.name}
                className="sm:12 h-20 w-auto grayscale lg:h-24"
              />
            </li>
          ))}
        </ul>
        <ul
          className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
          aria-hidden="true"
        >
          {PARTNERS.map((partner) => (
            <li key={partner.name + 'duplicated'}>
              <Image
                src={partner.image}
                alt={partner.name}
                className="sm:12 h-20 w-auto grayscale lg:h-24"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
