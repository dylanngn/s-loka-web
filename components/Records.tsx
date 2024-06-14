import { Container } from '@/components/Container';

export async function Records({ items, title }: { title: string; items: any }) {
  return (
    <Container className="text-center lg:pt-24">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="sm:mt-18 mx-auto mt-16 grid max-w-2xl grid-cols-2 sm:grid-cols-4 lg:mt-20 gap-4 lg:max-w-none">
        <div className="rounded-2xl flex flex-col max-w-52 bg-slate-100 w-full aspect-[4/3] sm:px-8 px-4 pt-4">
          <span
            className={`sm:my-3 sm:text-2xl text-lg font-semibold text-indigo-900 animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-partners)] before:content-[counter(num)]`}
          >
            <span className="sr-only">74</span>+
          </span>
          <div className="text-sm font-light leading-7 text-gray-600">
            <p className="flex-auto">{items.partners}</p>
          </div>
        </div>
        <div className="rounded-2xl flex flex-col max-w-52 bg-slate-100 w-full aspect-[4/3] sm:px-8 px-4 pt-4">
          <span
            className={`sm:my-3 sm:text-2xl text-lg font-semibold text-indigo-900 animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-words)] before:content-[counter(num)]`}
          >
            <span className="sr-only">197,265</span>+
          </span>
          <div className="text-sm font-light leading-7 text-gray-600">
            <p className="flex-auto">{items.words}</p>
          </div>
        </div>
        <div className="rounded-2xl flex flex-col max-w-52 bg-slate-100 w-full aspect-[4/3] sm:px-8 px-4 pt-4">
          <span
            className={`sm:my-3 sm:text-2xl text-lg font-semibold text-indigo-900 animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-satisfaction)] before:content-[counter(num)]`}
          >
            <span className="sr-only">100</span>%
          </span>
          <div className="text-sm font-light leading-7 text-gray-600">
            <p className="flex-auto">{items.satisfaction}</p>
          </div>
        </div>
        <div className="rounded-2xl flex flex-col max-w-52 bg-slate-100 w-full aspect-[4/3] sm:px-8 px-4 pt-4">
          <span
            className={`sm:my-3 sm:text-2xl text-lg font-semibold text-indigo-900 animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-words)] before:content-[counter(num)]`}
          >
            <span className="sr-only">50</span>+
          </span>
          <div className="text-sm font-light leading-7 text-gray-600">
            <p className="flex-auto">{items.pairs}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
