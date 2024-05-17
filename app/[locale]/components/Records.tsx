import { Container } from '@/components/Container';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';

export async function Records({ lang }: { lang: Locale }) {
  const dict = (await getDictionary(lang))['Home']['Records'];
  return (
    <Container className="text-center lg:pt-24">
      <h2 className="text-xl font-semibold text-slate-900">{dict.title}</h2>
      <div className="sm:mt-18 mx-auto mt-16 grid max-w-2xl grid-cols-2 sm:grid-cols-4 lg:mt-20 gap-4 sm:gap-16 lg:max-w-none">
        <div className="flex flex-col border border-slate-500 rounded-2xl bg-slate-100 w-full aspect-[4/3] px-2 pt-4 sm:pt-12">
          <dt className="sm:my-3 sm:text-2xl text-xl font-semibold tabular-nums text-indigo-900 animate-[counter_5s_ease-out_forwards] [counter-set:_num_var(--ctv)] before:content-[counter(num)]">
            <span className="sr-only">74</span>+
          </dt>
          <dd className="mt-1 flex flex-auto flex-col sm:text-base text-sm leading-7 text-gray-600">
            <p className="flex-auto">{dict.items.partners.title}</p>
          </dd>
        </div>
        <div className="flex flex-col border border-slate-500 rounded-2xl bg-slate-100 w-full aspect-[4/3] px-2 pt-4 sm:pt-12">
          <dt className="sm:my-3 sm:text-2xl text-xl font-semibold tabular-nums text-indigo-900 animate-[counter_5s_ease-out_forwards] [counter-set:_num_var(--w)] before:content-[counter(num)]">
            <span className="sr-only">197,265</span>+
          </dt>
          <dd className="mt-1 flex flex-auto flex-col sm:text-base text-sm leading-7 text-gray-600">
            <p className="flex-auto">{dict.items.words.title}</p>
          </dd>
        </div>
        <div className="flex flex-col border border-slate-500 rounded-2xl bg-slate-100 w-full aspect-[4/3] px-2 pt-4 sm:pt-12">
          <dt className="sm:my-3 sm:text-2xl text-xl font-semibold tabular-nums text-indigo-900 animate-[counter_5s_ease-out_forwards] [counter-set:_num_var(--satisfy)] before:content-[counter(num)]">
            <span className="sr-only">100</span>%
          </dt>
          <dd className="mt-1 flex flex-auto flex-col sm:text-base text-sm leading-7 text-gray-600">
            <p className="flex-auto">{dict.items.satisfaction.title}</p>
          </dd>
        </div>
        <div className="flex flex-col border border-slate-500 rounded-2xl bg-slate-100 w-full aspect-[4/3] px-2 pt-4 sm:pt-12">
          <dt className="sm:my-3 sm:text-2xl text-xl font-semibold tabular-nums text-indigo-900 animate-[counter_5s_ease-out_forwards] [counter-set:_num_var(--pair)] before:content-[counter(num)]">
            <span className="sr-only">50</span>+
          </dt>
          <dd className="mt-1 flex flex-auto flex-col sm:text-base text-sm leading-7 text-gray-600">
            <p className="flex-auto">{dict.items.pairs.title}</p>
          </dd>
        </div>
      </div>
    </Container>
  );
}
