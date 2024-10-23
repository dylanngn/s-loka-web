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
      <span className="-z-10 relative -mr-4 md:-mr-16 inline-flex justify-center items-center w-16 h-16 md:w-56 md:h-56 text-xl font-bold before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_90%)] before:opacity-10">
        {number}
      </span>
      <div className="w-full">
        <p className="border-b-2 border-black mb-6 pb-4 text-end text-xl uppercase">
          {title}
        </p>
        <p className="text-end lg:whitespace-pre">
          {description}
        </p>
      </div>
    </div>
  );
}
