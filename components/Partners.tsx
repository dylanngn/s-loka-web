import Image from 'next/image';
import brahmaImg from '@/images/brands/Brahma.gif';
import tedisImg from '@/images/brands/Tedis.png';
import appleImg from '@/images/brands/apple.png';
import asiaImg from '@/images/brands/asia.png';
import bayantechImg from '@/images/brands/bayantech.webp';
import crimsonImg from '@/images/brands/crimson.jpg';
import gialongImg from '@/images/brands/gialong.png';
import gientechImg from '@/images/brands/gientech.png';
import govbrImg from '@/images/brands/govbr.webp';
import hoavienbinhanImg from '@/images/brands/hoavienbinhan.webp';
import lacosteImg from '@/images/brands/lacoste.png';
import lanbridgeImg from '@/images/brands/lanbridge.jpg';
import mcDonaldImg from '@/images/brands/mc_donald.png';
import meeImg from '@/images/brands/mee.png';
import messeImg from '@/images/brands/messe.svg';
import miltonImg from '@/images/brands/milton.png';
import opoolImg from '@/images/brands/opool.webp';
import orbisImg from '@/images/brands/orbis.svg';
import petroVietnamImg from '@/images/brands/petro_vietnam.png';
import phillipsHealthcareImg from '@/images/brands/phillips_healthcare.png';
import pizzaCompanyImg from '@/images/brands/pizza_company.png';
import pizzaHutImg from '@/images/brands/pizza_hut.png';
import sawacoImg from '@/images/brands/sawaco.png';
import sysmexImg from '@/images/brands/sysmex.png';
import totalImg from '@/images/brands/total.png';
import translinkImg from '@/images/brands/translink.svg';
import vedastechImg from '@/images/brands/vedastech.avif';
import vifahomeImg from '@/images/brands/vifahome.png';
import vinexadImg from '@/images/brands/vinexad.png';
import wordsinvideoImg from '@/images/brands/wordsinvideo.webp';
import { Container } from '@/components/Container';

const PARTNERS = [
  {
    name: 'Brahma',
    image: brahmaImg,
  },
  {
    name: 'Tedis',
    image: tedisImg,
  },
  {
    name: 'Apple',
    image: appleImg,
  },
  {
    name: 'Asia',
    image: asiaImg,
  },
  {
    name: 'Bayantech',
    image: bayantechImg,
  },
  {
    name: 'Crimson',
    image: crimsonImg,
  },
  {
    name: 'Gialong',
    image: gialongImg,
  },
  {
    name: 'Gientech',
    image: gientechImg,
  },
  {
    name: 'Govbr',
    image: govbrImg,
  },
  {
    name: 'Hoavienbinhan',
    image: hoavienbinhanImg,
  },
  {
    name: 'Lacoste',
    image: lacosteImg,
  },
  {
    name: 'Lanbridge',
    image: lanbridgeImg,
  },
  {
    name: 'Mc Donald',
    image: mcDonaldImg,
  },
  {
    name: 'Mee',
    image: meeImg,
  },
  {
    name: 'Messe',
    image: messeImg,
  },
  {
    name: 'Milton',
    image: miltonImg,
  },
  {
    name: 'Opool',
    image: opoolImg,
  },
  {
    name: 'Orbis',
    image: orbisImg,
  },
  {
    name: 'Petro Vietnam',
    image: petroVietnamImg,
  },
  {
    name: 'Phillips Healthcare',
    image: phillipsHealthcareImg,
  },
  {
    name: 'Pizza Company',
    image: pizzaCompanyImg,
  },
  {
    name: 'Pizza Hut',
    image: pizzaHutImg,
  },
  {
    name: 'Sawaco',
    image: sawacoImg,
  },
  {
    name: 'Sysmex',
    image: sysmexImg,
  },
  {
    name: 'Total',
    image: totalImg,
  },
  {
    name: 'Translink',
    image: translinkImg,
  },
  {
    name: 'Vedastech',
    image: vedastechImg,
  },
  {
    name: 'Vifahome',
    image: vifahomeImg,
  },
  {
    name: 'Vinexad',
    image: vinexadImg,
  },
  {
    name: 'Wordsinvideo',
    image: wordsinvideoImg,
  },
];

export function Partners({ title }: { title: string }) {
  return (
    <Container className="pb-16 mx-auto pt-20 text-center lg:pt-24">
      <h2 className="relative text-xl font-semibold text-slate-900 before:absolute before:left-[calc(50%-12rem)] before:-top-7 before:h-24 before:w-96 before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_90%)] before:opacity-10">{title}</h2>
      <div className="sm:12 sm:mt-18 mx-auto mt-16 inline-flex h-20 w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_124px,_black_calc(100%-124px),transparent_100%)] lg:mt-20 lg:h-24">
        <ul
          x-ref="logos"
          className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-12"
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
          className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-12"
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
