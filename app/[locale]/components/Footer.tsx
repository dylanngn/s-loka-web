import { NavLink } from '@/components/NavLink';
import Image from 'next/image';
import logoImg from '@/images/logos/logo_light.png';
import footerBackground from '@/images/backgrounds/footer.png';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { SOCIALS, SOLUTIONS } from '@/constants/menu';
import { BackgroundImage } from '@/components/BackgroundImage';
import { getDictionary } from '@/server/get-dictionary';
import { Locale } from '@/i18n-config';

export async function Footer({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  return (
    <footer className="bg-secondary" aria-labelledby="footer-heading">
      <div
        id="footer-heading"
        className="border-b border-white sm:px-10 px-4 py-8 flex flex-col sm:flex-row justify-between"
      >
        <h2 className="sr-only">Footer</h2>
        <Image src={logoImg} alt="Footer" className="sm:w-auto w-2/3" />
        <div className="flex sm:flex-col flex-row sm:gap-2 gap-0">
          <div className="flex flex-1 sm:flex-auto sm:gap-6 gap-4 flex-col sm:flex-row sm:mt-0 mt-4">
            <span className="flex items-center gap-2 text-slate-300 text-sm">
              <PhoneIcon className="w-4 h-4 text-white" />
              +84 342 445 442
            </span>
            <span className="flex items-center gap-2 text-slate-300 text-sm">
              <EnvelopeIcon className="w-4 h-4 text-white" />
              hello@s-loka.com
            </span>
            <div className="flex sm:hidden">
              {SOCIALS.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    className="h-6 w-6 text-white hover:text-primary"
                    aria-hidden="true"
                  />
                </NavLink>
              ))}
            </div>
          </div>
          <span className="flex flex-1 sm:flex-auto sm:items-center gap-2 sm:pt-0 pt-4 text-slate-300 text-sm">
            <MapPinIcon className="sm:w-6 w-10 text-white self-start sm:self-auto mt-1 sm:mt-0" />
            47 Trương Quyền, phường Võ Thị Sáu, Quận 03, TP.HCM, Việt Nam
          </span>
        </div>
      </div>
      <BackgroundImage
        image={
          <Image
            src={footerBackground}
            alt="Image Alt Text"
            className="object-cover object-center"
            fill
          />
        }
        className="px-6 pb-8 pt-8 sm:pt-12 lg:px-8 lg:pt-16"
      >
        <div className="z-20 xl:grid xl:grid-cols-5 xl:gap-8 z">
          <div className="space-y-8 flex sm:flex-col justify-between">
            <div>
              <h3 className="text-sm text-white font-semibold leading-6">
                {dict.Menu.solution.sub.localization.title}
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {Object.values(dict.Menu.solution.sub.localization.sub).map(
                  (item) => (
                    <li key={item.title}>
                      <NavLink
                        href={item.href}
                        className="text-sm text-slate-300 leading-6"
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="hidden sm:flex">
              {SOCIALS.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    className="h-6 w-6 text-white hover:text-primary"
                    aria-hidden="true"
                  />
                </NavLink>
              ))}
            </div>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 grid-cols-2 gap-8 xl:col-span-4 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {dict.Menu.solution.sub.translation.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {Object.values(dict.Menu.solution.sub.translation.sub).map(
                    (item) => (
                      <li key={item.title}>
                        <NavLink
                          href={item.href}
                          className="text-sm text-slate-300 leading-6"
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {dict.Menu.solution.sub.interpretation.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {Object.values(dict.Menu.solution.sub.interpretation.sub).map(
                    (item) => (
                      <li key={item.title}>
                        <NavLink
                          href={item.href}
                          className="text-sm text-slate-300 leading-6"
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {dict.Menu.solution.sub.creativeTranslation.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {Object.values(
                    dict.Menu.solution.sub.creativeTranslation.sub
                  ).map((item) => (
                    <li key={item.title}>
                      <NavLink
                        href={item.href}
                        className="text-sm text-slate-300 leading-6"
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm text-white font-semibold leading-6">
                  {dict.Menu.solution.sub.BPO.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {Object.values(dict.Menu.solution.sub.BPO.sub).map((item) => (
                    <li key={item.title}>
                      <NavLink
                        href={item.href}
                        className="text-sm text-slate-300 leading-6"
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <div className="border-t border-white pt-8 pb-6">
        <p className="text-xs leading-5 text-gray-400 text-center">
          &copy; Bản quyền thuộc về CÔNG TY CỔ PHẦN DỊCH VỤ S-LOKA
        </p>
      </div>
    </footer>
  );
}
