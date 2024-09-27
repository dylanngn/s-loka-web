import clsx from "clsx";

export default function LeftTool({ category }: { category: 'Job' | 'Culture' | 'News' | 'Life'}) {
  return (
    <div className="static lg:absolute top-96 lg:left-0 xl:left-16 mb-12 lg:mb-0">
      <ul className="flex justify-center gap-5 lg:gap-20 lg:flex-col text-[#AEB3BE]">
        <li className={clsx("lg:-rotate-90", category === 'Job' && "text-secondary font-semibold")}>Công việc</li>
        <li className={clsx("lg:-rotate-90", category === 'Culture' && "text-secondary font-semibold")}>Văn hóa</li>
        <li className={clsx("lg:-rotate-90", category === 'News' && "text-secondary font-semibold")}>Tin tức</li>
        <li className={clsx("lg:-rotate-90", category === 'Life' && "text-secondary font-semibold")}>Cuộc sống</li>
      </ul>
    </div>
  )
}