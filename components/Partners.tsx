import Image from 'next/image';
import lacosteImg from '@/images/brands/lacoste.png';
import pizzaHutImg from '@/images/brands/pizza_hut.png';
import pizzaCompanyImg from '@/images/brands/pizza_company.png';
import appleImg from '@/images/brands/apple.png';
import mcDonaldImg from '@/images/brands/mc_donald.png';
import totalImg from '@/images/brands/total.png';
import petroVietnamImg from '@/images/brands/petro_vietnam.png';
import phillipsHealthcareImg from '@/images/brands/phillips_healthcare.png';
import { Container } from '@/components/Container';

const PARTNERS = [
  {
    name: 'Lacoste',
    image: lacosteImg,
  },
  {
    name: 'Pizza Hut',
    image: pizzaHutImg,
  },
  {
    name: 'Pizza Company',
    image: pizzaCompanyImg,
  },
  {
    name: 'Apple',
    image: appleImg,
  },
  {
    name: 'Mc Donald',
    image: mcDonaldImg,
  },
  {
    name: 'Total',
    image: totalImg,
  },
  {
    name: 'Petro Vietnam',
    image: petroVietnamImg,
  },
  {
    name: 'Phillips Healthcare',
    image: phillipsHealthcareImg,
  },
];

export async function Partners({ title }: { title: string }) {
  return (
    <Container className="pb-16 mx-auto pt-20 text-center lg:pt-24">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="sm:12 sm:mt-18 mx-auto mt-16 inline-flex h-20 w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_124px,_black_calc(100%-124px),transparent_100%)] lg:mt-20 lg:h-24">
        <ul
          x-ref="logos"
          className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        >
          {PARTNERS.map((partner) => (
            <li key={partner.name}>
              <Image
                src={partner.image}
                alt={partner.name}
                className="sm:12 h-16 w-auto grayscale lg:h-20"
              />
            </li>
          ))}
        </ul>
        <ul
          className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
          aria-hidden="true"
        >
          {PARTNERS.map((partner) => (
            <li key={partner.name + 'duplicated'}>
              <Image
                src={partner.image}
                alt={partner.name}
                className="sm:12 h-16 w-auto grayscale lg:h-20"
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
