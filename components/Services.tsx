import { Container } from "./Container";
import ServiceSnippet from "./ServiceSnippet";

type Service = [
  string,
  {
    title: string;
    description: string;
  }
];

export default function Services({
  title,
  ending,
  services,
}: {
  title: string;
  ending: string;
  services: Service[];
}) {
  return (
    <Container className="mt-16">
      <h2 className="text-xl font-semibold text-center">{title}</h2>
      <div className="w-fit mx-auto py-20">
        {services.map(([key, value]) => (
          <ServiceSnippet
            key={key}
            number={key}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
      <p className="relative mb-28 text-center text-xl before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_60%)] before:opacity-10">
        {ending}
      </p>
    </Container>
  );
}
