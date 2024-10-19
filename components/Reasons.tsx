import { Container } from "./Container";

export interface Reason {
  title: string;
  description: string;
  list?: Record<string, string>;
}

export default function Reasons({
  heading,
  description,
  reasons,
}: {
  heading: string;
  description: string;
  reasons: Record<string, Reason>;
}) {
  return (
    <Container className="relative mt-32  before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_50%)] before:opacity-15">
      <h2 className="mb-8 text-xl text-center font-semibold text-slate-900">
        {heading}
      </h2>
      <p className="text-center mb-12">{description}</p>
      {Object.values(reasons).map((item, index) => (
        <div key={index} className="flex flex-wrap my-16">
          <h3 className="inline w-16 text-4xl text-slate-300">{index + 1}</h3>
          <p className="inline w-[calc(100%-4rem)] leading-8 mt-2 font-light text-md">
            <span className="text-2xl mr-2">{item.title}</span>
            {item.description}
          </p>
          {item.list && (
            <ul className="w-[calc(100%-4rem)] mt-2 ml-16 list-disc list-outside pl-5">
              {Object.entries(item.list).map(([key, values], i) => (
                <li key={i}>{key.length > 2 && <strong>{key}</strong>}{values}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </Container>
  );
}
