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
    <div className="w-full flex items-center">
      <span className="-mr-16 inline-flex justify-center items-center w-56 h-56 text-3xl font-bold bg-gradient-radial from-yellow-50 to-white">
        {number}
      </span>
      <div className="w-full">
        <p className="border-b-2 border-black mb-6 pb-4 text-end text-3xl uppercase">
          {title}
        </p>
        <p className="text-end">
          {description}
        </p>
      </div>
    </div>
  );
}
