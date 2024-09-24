import { Container } from "./Container";

export interface Reason {
  title: string;
  description: string;
  list?: any;
}

export default function Reasons({
  heading,
  description,
  reasons,
}: {
  heading: string;
  description: string;
  reasons: [Reason];
}) {
  return (
    <Container className="mt-32">
      <h2 className="mb-8 text-xl text-center font-semibold text-slate-900">
        {heading}
      </h2>
      <p className="text-center mb-12">{description}</p>
      {Object.values(reasons).map((item, index) => (
        <div key={index} className="flex space-x-8 my-16">
          <h3 className="text-4xl text-slate-300">{index + 1}</h3>
          <p className="leading-8 mt-4 font-light text-md">
            <span className="text-2xl mr-2">{item.title}</span>
            {item.description}
            {item.list && (
              <ul>
                {Object.values(item.list).map((li, i) => (
                  <li key={i}>{li as string}</li>
                ))}
              </ul>
            )}
          </p>
        </div>
      ))}
    </Container>
  );
}
