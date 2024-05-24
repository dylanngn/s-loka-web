import { Container } from '@/components/Container';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/server/get-dictionary';
import {
  UserPlusIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  FaceSmileIcon,
  HandThumbUpIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { CareerImages } from '@/components/clients/CareerImages';

const ICONS = {
  environment: UserPlusIcon,
  path: ArrowTrendingUpIcon,
  paid: CurrencyDollarIcon,
  culture: FaceSmileIcon,
  regconize: HandThumbUpIcon,
  development: HeartIcon,
} as any;

export default async function CareerPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = (await getDictionary(lang))['Career']['Main'];
  return (
    <>
      <Container className="text-center">
        <h2 className="text-xl font-semibold text-slate-900">
          {dict.Introduction.title}
        </h2>
        <p className="font-light leading-7 mt-12">
          {dict.Introduction.description1}
        </p>
      </Container>
      <Container className="flex sm:flex-row flex-col mt-16 sm:gap-16">
        <CareerImages />
        <div>
          <p className="font-light leading-7 font-sm sm:mt-32 mt-4">
            {dict.Introduction.description2}
          </p>
          <p className="font-light leading-7 font-sm mt-4">
            {dict.Introduction.description3}
          </p>
        </div>
      </Container>
      <Container className="text-center mt-16">
        <h2 className="text-xl font-semibold text-slate-900">
          {dict.Values.title}
        </h2>
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-x-28 sm:gap-y-16 gap-8 mt-12">
          {Object.entries(dict.Values.items).map(([key, value]) => {
            const Icon = ICONS[key];
            return (
              <div
                key={key}
                className="flex sm:flex-row flex-col text-left border-slate-400 border gap-2 px-4 py-6 rounded-xl items-center sm:justify-center"
              >
                <div className="block">
                  <Icon className="w-8 block" />
                </div>
                <span className="font-sm font-light">{value.name}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
