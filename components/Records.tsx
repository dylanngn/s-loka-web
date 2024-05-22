import { Container } from '@/components/Container';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';

export async function Records({ lang }: { lang: Locale }) {
  const dict = (await getDictionary(lang))['Home']['Records'];
  return (
    <Container className="text-center lg:pt-24">
      <h2 className="text-xl font-semibold text-slate-900">{dict.title}</h2>
      <div className="sm:mt-18 mx-auto mt-16 grid max-w-2xl grid-cols-2 sm:grid-cols-4 lg:mt-20 gap-4 sm:gap-16 lg:max-w-none">
        <div className="border border-slate-500 rounded-2xl flex flex-col bg-slate-100 w-full aspect-[4/3] sm:px-12 px-4 pt-4">
          <span
            className={`sm:my-3 text-xl font-semibold tabular-nums text-indigo-900 transition-[_--num] duration-[3s] ease-out [counter-set:_num_var(--num)] supports-[counter-set]:before:content-[counter(num)] [--num:74]`}
          >
            <span className="supports-[counter-set]:sr-only">74</span>+
          </span>
          <div className="text-sm leading-7 text-gray-600">
            <p className="flex-auto">{dict.items.partners.title}</p>
          </div>
        </div>
        <div className="border border-slate-500 rounded-2xl flex flex-col bg-slate-100 w-full aspect-[4/3] sm:px-12 px-4 pt-4">
          <span
            className={`sm:my-3 text-xl font-semibold tabular-nums text-indigo-900 transition-[_--num] duration-[3s] ease-out [counter-set:_num_var(--num)] supports-[counter-set]:before:content-[counter(num)] [--num:197265]`}
          >
            <span className="supports-[counter-set]:sr-only">197,265</span>+
          </span>
          <div className="text-sm leading-7 text-gray-600">
            <p className="flex-auto">{dict.items.words.title}</p>
          </div>
        </div>
        <div className="border border-slate-500 rounded-2xl flex flex-col bg-slate-100 w-full aspect-[4/3] sm:px-12 px-4 pt-4">
          <span
            className={`sm:my-3 text-xl font-semibold tabular-nums text-indigo-900 transition-[_--num] duration-[3s] ease-out [counter-set:_num_var(--num)] supports-[counter-set]:before:content-[counter(num)] [--num:100]`}
          >
            <span className="supports-[counter-set]:sr-only">100</span>%
          </span>
          <div className="text-sm leading-7 text-gray-600">
            <p className="flex-auto">{dict.items.satisfaction.title}</p>
          </div>
        </div>
        <div className="border border-slate-500 rounded-2xl flex flex-col bg-slate-100 w-full aspect-[4/3] sm:px-12 px-4 pt-4">
          <span
            className={`sm:my-3 text-xl font-semibold tabular-nums text-indigo-900 transition-[_--num] duration-[3s] ease-out [counter-set:_num_var(--num)] supports-[counter-set]:before:content-[counter(num)] [--num:50]`}
          >
            <span className="supports-[counter-set]:sr-only">50</span>+
          </span>
          <div className="text-sm leading-7 text-gray-600">
            <p className="flex-auto">{dict.items.pairs.title}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}