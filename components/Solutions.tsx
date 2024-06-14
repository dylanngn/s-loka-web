import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getDictionary } from '@/server/get-dictionary';
import { Locale } from '@/i18n-config';
import phienDichImg from '@/images/solutions/phien_dich.png';
import dichThuatImg from '@/images/solutions/dich_thuat.png';
import banDiaHoaImg from '@/images/solutions/ban_dia_hoa.png';
import dichSangTaoImg from '@/images/solutions/dich_sang_tao.png';
import BPOImg from '@/images/solutions/BPO.png';
import { Container } from '@/components/Container';

export async function Solutions({ lang }: { lang: Locale }) {
  const dict = (await getDictionary(lang))['Home']['Solutions'];
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-24">
      <h2 className="text-xl font-semibold text-slate-900">{dict.title}</h2>
      <div className="grid-cols-1 mt-16 place-items-center gap-x-24 gap-y-16 grid sm:grid-cols-6 sm:[&>*:nth-child(4)]:col-end-4">
        {Object.entries(dict.item).map(([key, value]) => (
          <div
            key={key}
            className="last:-col-end-2 mx-2 max-w-72 group relative col-span-2 flex select-none flex-col overflow-hidden rounded-2xl border border-slate-900"
          >
            <span className="bg-secondary absolute inset-0 z-0 origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100" />
            <span className="group-hover:text-primary relative z-10 flex items-center justify-between px-4 py-6 text-slate-900">
              {value.title}
              <ArrowRightIcon className="h-6 w-6 font-medium" />
            </span>
            <Image
              className="z-10"
              src={
                (
                  {
                    localization: banDiaHoaImg,
                    translation: dichThuatImg,
                    interpretation: phienDichImg,
                    creativeTranslation: dichSangTaoImg,
                    BPO: BPOImg,
                  } as any
                )[key]
              }
              alt={value.title}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
