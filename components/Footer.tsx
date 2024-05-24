import { NavLink } from '@/components/NavLink';
import Image from 'next/image';
import logoImg from '@/images/logos/logo_light.png';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { Facebook as FacebookIcon } from '@/components/icons/Facebook';
import { Instagram as InstagramIcon } from '@/components/icons/Instagram';
import { LinkedIn as LinkedinIcon } from '@/components/icons/LinkedIn';
import { YouTube as YoutubeIcon } from '@/components/icons/YouTube';
import { TikTok as TikTokIcon } from '@/components/icons/TikTok';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/sloka.vn',
    icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sloka.vn',
    icon: InstagramIcon,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/company/sloka-vn',
    icon: LinkedinIcon,
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/channel/UCbqo6Fw7L7Lm8Z8Qc4bZ5Xg',
    icon: YoutubeIcon,
  },
  {
    name: 'TikTok',
    href: 'https://www.youtube.com/channel/UCbqo6Fw7L7Lm8Z8Qc4bZ5Xg',
    icon: TikTokIcon,
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
  return (
    <footer
      className='bg-secondary bg-[url("/footer-bg.png")]'
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image className="h-16 w-auto" src={logoImg} alt="Company name" />
            <p className="text-sm leading-6 text-gray-300">
              <PhoneIcon className="h-4 w-4 mr-2 inline-block" />
              <NavLink
                href={`tel:${info.phone}`}
                className="text-gray-300 hover:text-white"
              >
                {info.phone}
              </NavLink>
              <EnvelopeIcon className="h-4 w-4 mr-2 ml-6 inline-block" />
              <NavLink
                href={`mailto:${info.email}`}
                className="text-gray-300 hover:text-white"
              >
                {info.email}
              </NavLink>
              <br />
              <br />
              <MapPinIcon className="h-4 w-4 mr-2 inline-block" />
              {info.address}
            </p>
            <div className="flex space-x-6">
              {SOCIAL_LINKS.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </NavLink>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {menu1.label}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {menu1.items.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {menu2.label}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {menu2.items.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {menu3.label}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {menu3.items.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {menu4.label}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {menu4.items.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-center text-gray-400">
            &copy; {copyRight}
          </p>
        </div>
      </div>
    </footer>
  );
}
