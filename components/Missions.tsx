import { Container } from '@/components/Container';
import { Badge } from '@/components/icons/Badge';
import { Clipper } from '@/components/icons/Clipper';
import { Message } from '@/components/icons/Message';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';

const ICONS = {
  understand: Badge,
  provide: Clipper,
  unleash: Message,
} as any;

export async function Missions({ lang }: { lang: Locale }) {
  const dict = (await getDictionary(lang))['Home']['Missions'];
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-24">
      <h2 className="text-xl font-semibold text-slate-900">{dict.title}</h2>
      <div className="sm:mt-18 mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {Object.entries(dict.items).map(([key, value]) => {
            const Icon = ICONS[key];
            return (
              <div key={key} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 w-full flex h-10 flex-col items-center justify-center rounded-lg">
                    <Icon
                      className=" h-16 w-16 text-slate-900"
                      aria-hidden="true"
                    />
                  </div>
                  {value.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </Container>
  );
}
