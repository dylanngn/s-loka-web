import { Container } from '@/components/Container';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';

const RECORDS = {
  partners: { value: '74', operator: '+' },
  words: { value: '197,265', operator: '+' },
  satisfaction: { value: '100', operator: '%' },
  pairs: { value: '50', operator: '+' },
} as any;

function Record({ label, record }: { label: string; record: string }) {
  return (
    <div className="border border-slate-500 rounded-2xl bg-slate-100 w-full aspect-[4/3] sm:px-12 px-4 pt-4">
      <div
        className={`sm:my-3 text-xl font-semibold tabular-nums text-indigo-900 animate-[counter_5s_ease-out_forwards] [counter-set:_num_var(--${record})] before:content-[counter(num)]`}
      >
        <span className="sr-only">{RECORDS[record].value}</span>
        {RECORDS[record].operator}
      </div>
      <div className="text-sm leading-7 text-gray-600">
        <p className="flex-auto">{label}</p>
      </div>
    </div>
  );
}

export async function Records({ lang }: { lang: Locale }) {
  const dict = (await getDictionary(lang))['Home']['Records'];
  return (
    <Container className="text-center lg:pt-24">
      <h2 className="text-xl font-semibold text-slate-900">{dict.title}</h2>
      <div className="sm:mt-18 mx-auto mt-16 grid max-w-2xl grid-cols-2 sm:grid-cols-4 lg:mt-20 gap-4 sm:gap-16 lg:max-w-none">
        {Object.entries(dict.items).map(([key, value]) => (
          <Record key={key} label={value.title} record={key} />
        ))}
      </div>
    </Container>
  );
}
