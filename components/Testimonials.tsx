import { Container } from '@/components/Container';
import Carousel from '@/components/clients/Carousel';
import { Quote } from '@/components/icons/Quote';
import maleImg from '@/images/avatars/male.png';
import femaleImg from '@/images/avatars/female.jpg';
import Image from 'next/image';

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

type TestimonialProps = {
  name: string;
  message: string;
  position: string;
  gender: string;
  index: number;
};

function Testimonial({
  name,
  message,
  position,
  gender,
  index,
}: TestimonialProps) {
  return (
    <div
      className={`rounded-2xl shadow-slate-300 shadow-lg mb-32 p-8 w-3/5 ${
        index === 0 ? 'ml-0' : index === 1 ? 'ml-40' : 'ml-24'
      } `}
    >
      <div className="flex items-start space-x-8">
        <Quote className="w-16 text-gray-400" />
        <p className="text-start font-light">{`"${message}"`}</p>
      </div>
      <div className="flex space-x-8">
        <Image
          className="w-16"
          alt="avatar"
          src={gender === 'female' ? femaleImg : maleImg}
        />
        <div className="mt-4">
          <p className="font-semibold text-start">{name}</p>
          <p className="font-semibold text-blue-800 text-start mt-2">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}

function TestimonialPage({ items }: { items: TestimonialProps[] }) {
  return (
    <div className="">
      {items.map((item) => (
        <Testimonial
          key={item.index}
          name={item.name}
          message={item.message}
          position={item.position}
          gender={item.gender}
          index={item.index}
        />
      ))}
    </div>
  );
}

export function Testimonials({
  title,
  description,
  item1,
  item2,
  item3,
}: TestimonialsProps) {
  const items = [item1, item2, item3].map((item, index) => ({
    ...item,
    gender: index > 1 ? 'female' : 'male',
    index,
  }));

  return (
    <Container className="text-center mt-32 sm:block hidden">
      <h2 className="relative text-xl font-semibold text-slate-900 before:absolute before:left-[calc(50%-12rem)] before:-top-7 before:h-24 before:w-96 before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_90%)] before:opacity-10">{title}</h2>
      <p className="text-lg mt-12 font-light mb-32 text-center">
        {description}
      </p>
      <Carousel
        slides={[
          <TestimonialPage items={items} key={1} />,
          <TestimonialPage items={items} key={2} />,
          <TestimonialPage items={items} key={3} />,
        ]}
        options={{ align: 'start', loop: true }}
      />
    </Container>
  );
}
