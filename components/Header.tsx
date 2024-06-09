import Image from 'next/image';
import { Button } from './Button';
import { NavLink } from './NavLink';
import {
  AboutMenu,
  AboutMenuProps,
  MenuLink,
  MobileMenu,
  ServiceMenu,
  ServiceMenuProps,
  SolutionMenu,
  SolutionMenuProps,
} from '@/components/Menus';
import logo from '@/images/logos/logo.png';

type HeaderProps = {
  home: MenuLink;
  solution: SolutionMenuProps;
  service: ServiceMenuProps;
  about: AboutMenuProps;
  contact: MenuLink;
};

export function Header({
  home,
  solution,
  service,
  about,
  contact,
}: HeaderProps) {
  return (
    <header className="pt-8 pb-6 shadow-sm">
      <nav className="relative z-50 flex justify-between mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:gap-x-12">
          <a href="/" aria-label="Home">
            <Image src={logo} alt="Home" className="h-10 w-auto" />
          </a>
        </div>
        <div className="flex items-center gap-x-5 md:gap-x-8">
          <div className="hidden md:flex md:gap-x-12">
            <NavLink href={home.href}>{home.label}</NavLink>
            <SolutionMenu {...solution} />
            <ServiceMenu {...service} />
            <AboutMenu {...about} />
          </div>
          <Button href="#contact">{contact.label}</Button>
          <MobileMenu
            menu={[
              home,
              { label: solution.label, href: solution.href },
              { label: service.label, href: service.href },
              about,
            ]}
          />
        </div>
      </nav>
    </header>
  );
}
