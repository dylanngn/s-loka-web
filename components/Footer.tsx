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
    // <footer className="bg-secondary" aria-labelledby="footer-heading">
    //   <div className="border-b border-white sm:px-10 px-4 py-8 flex flex-col sm:flex-row justify-between">
    //     <h2 className="sr-only">Footer</h2>
    //     <Image src={logoImg} alt="Footer" className="sm:w-auto w-2/3" />
    //     <div className="flex sm:flex-col flex-row sm:gap-2 gap-0">
    //       <div className="flex flex-1 sm:flex-auto sm:gap-6 gap-4 flex-col sm:flex-row sm:mt-0 mt-4">
    //         <span className="flex items-center gap-2 text-slate-300 text-sm">
    //           <PhoneIcon className="w-4 h-4 text-white" />
    //           +84 342 445 442
    //         </span>
    //         <span className="flex items-center gap-2 text-slate-300 text-sm">
    //           <EnvelopeIcon className="w-4 h-4 text-white" />
    //           hello@s-loka.com
    //         </span>
    //         <div className="flex sm:hidden">
    //           {SOCIALS.map((item) => (
    //             <NavLink
    //               key={item.name}
    //               href={item.href}
    //               className="text-gray-500 hover:text-gray-400"
    //             >
    //               <span className="sr-only">{item.name}</span>
    //               <item.icon
    //                 className="h-6 w-6 text-white hover:text-primary"
    //                 aria-hidden="true"
    //               />
    //             </NavLink>
    //           ))}
    //         </div>
    //       </div>
    //       <span className="flex flex-1 sm:flex-auto sm:items-center gap-2 sm:pt-0 pt-4 text-slate-300 text-sm">
    //         <MapPinIcon className="sm:w-6 w-10 text-white self-start sm:self-auto mt-1 sm:mt-0" />
    //         47 Trương Quyền, phường Võ Thị Sáu, Quận 03, TP.HCM, Việt Nam
    //       </span>
    //     </div>
    //   </div>
    //   <BackgroundImage
    //     image={
    //       <Image
    //         src={footerBackground}
    //         alt="Image Alt Text"
    //         className="object-cover object-center"
    //         fill
    //       />
    //     }
    //     className="px-6 pb-8 pt-8 sm:pt-12 lg:px-8 lg:pt-16"
    //   >
    //     <div className="z-20 xl:grid xl:grid-cols-5 xl:gap-8 z">
    //       <div className="space-y-8 flex sm:flex-col justify-between">
    //         <div>
    //           <h3 className="text-sm text-white font-semibold leading-6">
    //             {dict.Menu.solution.sub.localization.title}
    //           </h3>
    //           <ul role="list" className="mt-6 space-y-4">
    //             {Object.values(dict.Menu.solution.sub.localization.sub).map(
    //               (item) => (
    //                 <li key={item.title}>
    //                   <NavLink
    //                     href={item.href}
    //                     className="text-sm text-slate-300 leading-6"
    //                   >
    //                     {item.title}
    //                   </NavLink>
    //                 </li>
    //               )
    //             )}
    //           </ul>
    //         </div>

    //         <div className="hidden sm:flex">
    //           {SOCIALS.map((item) => (
    //             <NavLink
    //               key={item.name}
    //               href={item.href}
    //               className="text-gray-500 hover:text-gray-400"
    //             >
    //               <span className="sr-only">{item.name}</span>
    //               <item.icon
    //                 className="h-6 w-6 text-white hover:text-primary"
    //                 aria-hidden="true"
    //               />
    //             </NavLink>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="mt-16 grid sm:grid-cols-2 grid-cols-2 gap-8 xl:col-span-4 xl:mt-0">
    //         <div className="md:grid md:grid-cols-2 md:gap-12">
    //           <div>
    //             <h3 className="text-sm font-semibold leading-6 text-white">
    //               {dict.Menu.solution.sub.translation.title}
    //             </h3>
    //             <ul role="list" className="mt-6 space-y-4">
    //               {Object.values(dict.Menu.solution.sub.translation.sub).map(
    //                 (item) => (
    //                   <li key={item.title}>
    //                     <NavLink
    //                       href={item.href}
    //                       className="text-sm text-slate-300 leading-6"
    //                     >
    //                       {item.title}
    //                     </NavLink>
    //                   </li>
    //                 )
    //               )}
    //             </ul>
    //           </div>
    //           <div className="mt-10 md:mt-0">
    //             <h3 className="text-sm font-semibold leading-6 text-white">
    //               {dict.Menu.solution.sub.interpretation.title}
    //             </h3>
    //             <ul role="list" className="mt-6 space-y-4">
    //               {Object.values(dict.Menu.solution.sub.interpretation.sub).map(
    //                 (item) => (
    //                   <li key={item.title}>
    //                     <NavLink
    //                       href={item.href}
    //                       className="text-sm text-slate-300 leading-6"
    //                     >
    //                       {item.title}
    //                     </NavLink>
    //                   </li>
    //                 )
    //               )}
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="md:grid md:grid-cols-2 md:gap-8">
    //           <div>
    //             <h3 className="text-sm font-semibold leading-6 text-white">
    //               {dict.Menu.solution.sub.creativeTranslation.title}
    //             </h3>
    //             <ul role="list" className="mt-6 space-y-4">
    //               {Object.values(
    //                 dict.Menu.solution.sub.creativeTranslation.sub
    //               ).map((item) => (
    //                 <li key={item.title}>
    //                   <NavLink
    //                     href={item.href}
    //                     className="text-sm text-slate-300 leading-6"
    //                   >
    //                     {item.title}
    //                   </NavLink>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //           <div className="mt-10 md:mt-0">
    //             <h3 className="text-sm text-white font-semibold leading-6">
    //               {dict.Menu.solution.sub.BPO.title}
    //             </h3>
    //             <ul role="list" className="mt-6 space-y-4">
    //               {Object.values(dict.Menu.solution.sub.BPO.sub).map((item) => (
    //                 <li key={item.title}>
    //                   <NavLink
    //                     href={item.href}
    //                     className="text-sm text-slate-300 leading-6"
    //                   >
    //                     {item.title}
    //                   </NavLink>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </BackgroundImage>
    //   <div className="border-t border-white pt-8 pb-6">
    //     <p className="text-xs leading-5 text-gray-400 text-center">
    //       &copy; Bản quyền thuộc về CÔNG TY CỔ PHẦN DỊCH VỤ S-LOKA
    //     </p>
    //   </div>
    // </footer>
  );
}
