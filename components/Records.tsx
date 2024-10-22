import { Container } from '@/components/Container';
import clsx from 'clsx';

export async function Records({ items, title, background = false }: { title: string; items: any, background?: boolean }) {
  return (
    <Container className="text-center lg:pt-24">
      <div className={clsx(background ? "relative before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_farthest-side_at_center,_var(--color-primary)_0%,_transparent_100%)] before:opacity-20" : "")}>
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <div className="sm:mt-18 mx-auto mt-16 grid grid-cols-2 sm:grid-cols-4 place-items-center lg:mt-20 gap-8">
          <div className="rounded-2xl shadow-[0_0_5px_0_#00000040] flex flex-col justify-center bg-gray-50 h-full w-full max-w-72 aspect-[4/3]">
            <span
              className={`sm:my-3 sm:text-2xl text-lg font-semibold text-[#0052B4] animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-partners)] before:content-[counter(num)]`}
            >
              <span className="sr-only">74</span>+
            </span>
            <div className="text-md font-light leading-7 text-sky-900">
              <p className="flex-auto">{items.partners}</p>
            </div>
          </div>
          <div className="rounded-2xl shadow-[0_0_5px_0_#00000040] flex flex-col justify-center bg-gray-50 h-full w-full max-w-72 aspect-[4/3]">
            <span
              className={`sm:my-3 sm:text-2xl text-lg font-semibold text-[#0052B4] animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-words)] before:content-[counter(num)]`}
            >
              <span className="sr-only">197,265</span>+
            </span>
            <div className="text-md font-light leading-7 text-sky-900">
              <p className="flex-auto">{items.words}</p>
            </div>
          </div>
          <div className="rounded-2xl shadow-[0_0_5px_0_#00000040] flex flex-col justify-center bg-gray-50 h-full w-full max-w-72 aspect-[4/3]">
            <span
              className={`sm:my-3 sm:text-2xl text-lg font-semibold text-[#0052B4] animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-satisfaction)] before:content-[counter(num)]`}
            >
              <span className="sr-only">100</span>%
            </span>
            <div className="text-md font-light leading-7 text-sky-900">
              <p className="flex-auto">{items.satisfaction}</p>
            </div>
          </div>
          <div className="rounded-2xl shadow-[0_0_5px_0_#00000040] flex flex-col justify-center bg-gray-50 h-full w-full max-w-72 aspect-[4/3]">
            <span
              className={`sm:my-3 sm:text-2xl text-lg font-semibold text-[#0052B4] animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-words)] before:content-[counter(num)]`}
            >
              <span className="sr-only">50</span>+
            </span>
            <div className="text-md font-light leading-7 text-sky-900">
              <p className="flex-auto">{items.pairs}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
