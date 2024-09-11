export default function ServiceSnippet({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="w-full max-w-[900px] flex items-center mb-5 md:mb-0">
      <span className="-mr-4 md:-mr-16 inline-flex justify-center items-center w-16 h-16 md:w-56 md:h-56 text-xl font-bold bg-gradient-radial from-yellow-50 to-white">
        {number}
      </span>
      <div className="w-full">
        <p className="border-b-2 border-black mb-6 pb-4 text-end text-xl uppercase">
          {title}
        </p>
        <p className="text-end">
          {description}
        </p>
      </div>
    </div>
  );
}
