import { NavLink } from "@/components/NavLink";
import Image from "next/image";
import logoImg from "@/images/logos/logo_light.png";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Facebook as FacebookIcon } from "@/components/icons/Facebook";
import { Instagram as InstagramIcon } from "@/components/icons/Instagram";
import { LinkedIn as LinkedinIcon } from "@/components/icons/LinkedIn";
import { YouTube as YoutubeIcon } from "@/components/icons/YouTube";
import { TikTok as TikTokIcon } from "@/components/icons/TikTok";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/sloka.vn",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sloka.vn",
    icon: InstagramIcon,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/sloka-vn",
    icon: LinkedinIcon,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCbqo6Fw7L7Lm8Z8Qc4bZ5Xg",
    icon: YoutubeIcon,
  },
  {
    name: "TikTok",
    href: "https://www.youtube.com/channel/UCbqo6Fw7L7Lm8Z8Qc4bZ5Xg",
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
  menu5: { label: string; items: FooterLink[] };
};

export async function Footer({
  info,
  copyRight,
  menu1,
  menu2,
  menu3,
  menu4,
  menu5,
}: FooterProps) {
  return (
    <footer
      className='bg-secondary bg-[url("/footer-bg.png")] mt-6'
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="border-b flex flex-wrap justify-between gap-y-5 pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 lg:pb-10 mb-16">
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
        </div>

        <div className="flex flex-wrap justify-between gap-y-14 gap-x-5 mb-14 lg:mb-0">
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
          <div className="">
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
          <div className="">
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
          <div className="">
            <h3 className="text-sm font-semibold leading-6 text-white">
              {menu5.label}
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {menu5.items.map((item) => (
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

        <div className="flex space-x-6">
          {SOCIAL_LINKS.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              className="text-gray-500 hover:text-gray-400"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6 fill-white" aria-hidden="true" />
            </NavLink>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 lg:mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-5 text-center text-gray-400">
            &copy; {copyRight}
          </p>
        </div>
      </div>
    </footer>
  );
}
