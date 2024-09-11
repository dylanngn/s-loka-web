export default function Reason({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex space-x-8 my-16">
      <h3 className="text-4xl text-slate-300">{number}</h3>
      <p className="leading-8 mt-4 font-light text-md">
        <span className="text-2xl mr-2">{title}</span>
        {description}
      </p>
    </div>
  );
}
