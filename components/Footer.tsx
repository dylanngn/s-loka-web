import { NavLink } from '@/components/NavLink';
import Image from 'next/image';
import logoImg from '@/images/logos/logo_light.png';
import footerBackground from '@/images/backgrounds/footer.png';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { SOCIALS } from '@/constants/menu';
import { BackgroundImage } from '@/components/BackgroundImage';
import { Facebook as FacebookIcon } from '@/components/icons/Facebook';
import { Instagram as InstagramIcon } from '@/components/icons/Instagram';
import { LinkedIn as LinkedinIcon } from '@/components/icons/LinkedIn';
import { YouTube as YoutubeIcon } from '@/components/icons/YouTube';
import { TikTok as TikTokIcon } from '@/components/icons/TikTok';

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/sloka.vn',
    icon: FacebookIcon,
  },
  {
    href: 'https://www.instagram.com/sloka.vn',
    icon: InstagramIcon,
  },
  {
    href: 'https://www.linkedin.com/company/sloka-vn',
    icon: LinkedinIcon,
  },
  {
    href: 'https://www.youtube.com/channel/UCbqo6Fw7L7Lm8Z8Qc4bZ5Xg',
    icon: TikTokIcon,
  },
  {
    href: 'https://www.youtube.com/channel/UCbqo6Fw7L7Lm8Z8Qc4bZ5Xg',
    icon: YoutubeIcon,
  },
];

type FooterLink = {
  label: string;
  href: string;
};

type FooterProps = {
  info: {
    phone: string;
    address: string;
    email: string;
  };
  copyRight: string;
  menu1: { label: string; items: FooterLink[] };
  menu2: { label: string; items: FooterLink[] };
  menu3: { label: string; items: FooterLink[] };
  menu4: { label: string; items: FooterLink[] };
};

export async function Footer({
  info,
  copyRight,
  menu1,
  menu2,
  menu3,
  menu4,
}: FooterProps) {
  const menus = [
    [menu1, menu2],
    [menu3, menu4],
  ];
  return (
    <footer className="bg-secondary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <BackgroundImage
        image={
          <Image
            src={footerBackground}
            alt="Image Alt Text"
            className="object-cover object-center"
            fill
          />
        }
        className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32"
      >
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image className="h-16 w-auto" src={logoImg} alt="S-LOKA" />
            <p className="text-sm leading-6 text-gray-300">
              <PhoneIcon className="h-4 w-4 mr-2 inline-block" />
              <a
                href={`tel:${info.phone}`}
                className="text-gray-300 hover:text-white"
              >
                {info.phone}
              </a>
              <EnvelopeIcon className="h-4 w-4 mr-2 ml-6 inline-block" />
              <a
                href={`mailto:${info.email}`}
                className="text-gray-300 hover:text-white"
              >
                {info.email}
              </a>
              <br />
              <br />
              <MapPinIcon className="h-4 w-4 mr-2 inline-block" />
              {info.address}
            </p>
            <div className="flex space-x-6">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.href}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 space-y-10 md:space-y-0">
            {menus.map((group, index) => (
              <div className="md:grid md:grid-cols-2 md:gap-8" key={index}>
                {group.map((menu) => (
                  <div key={menu.label}>
                    <h3 className="text-sm font-semibold leading-6 text-white">
                      {menu.label}
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {menu.items.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-300 hover:text-white"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs text-center leading-5 text-gray-400">
            &copy; {copyRight}
          </p>
        </div>
      </BackgroundImage>
    </footer>
  );
}
