import { Container } from '@/components/Container';

type TestimonialsProps = {
  title: string;
  description: string;
  item1: {
    name: string;
    message: string;
    position: string;
  };
  item2: {
    name: string;
    message: string;
    position: string;
  };
  item3: {
    name: string;
    message: string;
    position: string;
  };
};

export function Testimonials({ title, description }: TestimonialsProps) {
  return (
    <Container className="text-center">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="text-s mt-16 font-light">{description}</p>
    </Container>
  );
}
