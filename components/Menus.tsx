'use client';
import { Fragment, useState } from 'react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Popover,
  // ... existing imports

  Transition,
  PopoverPanel,
  TransitionChild,
  Dialog,
  DialogPanel,
} from '@headlessui/react';
import { NavLink } from '@/components/NavLink';
import { clsx } from 'clsx';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import logo from '@/images/logos/logo.png';
import Link from 'next/link';

export type MenuLink = {
  label: string;
  href: string;
};

function MenuTransition({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 -translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-1"
    >
      {children}
    </Transition>
  );
}

// --- Mobile Menu Implementation ---

type MobileMenuProps = {
  home: MenuLink;
  solution: SolutionMenuProps;
  service: ServiceMenuProps;
  about: AboutMenuProps;
  contact: MenuLink;
};

export function MobileMenu({
  home,
  solution,
  service,
  about,
  contact,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPanel, setCurrentPanel] = useState<
    'main' | 'solution' | 'service' | 'about'
  >('main');
  const [direction, setDirection] = useState(1);

  const closeMenu = () => {
    setIsOpen(false);
    // Reset panel after transition
    setTimeout(() => {
      setCurrentPanel('main');
      setDirection(1);
    }, 300);
  };

  const openMenu = () => setIsOpen(true);

  const navigateTo = (panel: 'main' | 'solution' | 'service' | 'about') => {
    if (panel === 'main') {
      setDirection(-1);
    } else {
      setDirection(1);
    }
    setCurrentPanel(panel);
  };

  const menuVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={openMenu}
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none text-slate-700"
        aria-label="Toggle Navigation"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeMenu}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 z-50 flex">
            <TransitionChild
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <DialogPanel className="pointer-events-auto w-screen h-full bg-white relative flex flex-col overflow-hidden">
                {/* Header of the Mobile Menu */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-slate-100 shrink-0 relative z-20 bg-white">
                  {currentPanel === 'main' ? (
                    <Link href="/" onClick={closeMenu}>
                      <Image src={logo} alt="S-LOKA" className="h-8 w-auto" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => navigateTo('main')}
                      className="flex items-center gap-1 text-sm font-semibold text-secondary"
                    >
                      <ChevronLeftIcon className="h-5 w-5" />
                      Back
                    </button>
                  )}

                  <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <button
                      type="button"
                      className="rounded-md text-slate-400 hover:text-slate-500 focus:outline-none"
                      onClick={closeMenu}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex-1 relative overflow-x-hidden bg-white">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    {currentPanel === 'main' && (
                      <motion.div
                        key="main"
                        custom={direction}
                        variants={menuVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="absolute inset-0 px-6 py-6 overflow-y-auto"
                      >
                        <nav className="space-y-6">
                          <div className="flex flex-col gap-y-6 text-base font-medium text-slate-900">
                            {/* Home Link */}
                            <Link
                              href={home.href}
                              className="block py-2"
                              onClick={closeMenu}
                            >
                              {home.label}
                            </Link>

                            {/* Solutions Drill-down */}
                            <div
                              className="flex items-center justify-between py-2 cursor-pointer group"
                              onClick={() => navigateTo('solution')}
                            >
                              <span>{solution.label}</span>
                              <ChevronRightIcon className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                            </div>

                            {/* Services Drill-down */}
                            <div
                              className="flex items-center justify-between py-2 cursor-pointer group"
                              onClick={() => navigateTo('service')}
                            >
                              <span>{service.label}</span>
                              <ChevronRightIcon className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                            </div>

                            {/* About Drill-down (About has items too) */}
                            <div
                              className="flex items-center justify-between py-2 cursor-pointer group"
                              onClick={() => navigateTo('about')}
                            >
                              <span>{about.label}</span>
                              <ChevronRightIcon className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                            </div>
                          </div>
                        </nav>
                      </motion.div>
                    )}

                    {currentPanel === 'solution' && (
                      <motion.div
                        key="solution"
                        custom={direction}
                        variants={menuVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="absolute inset-0 px-6 py-6 overflow-y-auto"
                      >
                        <h2 className="text-lg font-bold text-slate-900 mb-6">
                          {solution.label}
                        </h2>
                        <div className="space-y-8 pb-8">
                          {solution.groups.map((group) => (
                            <div key={group.label}>
                              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                                {group.label}
                              </h3>
                              <div className="flex flex-col gap-y-3">
                                {group.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-sm font-medium text-slate-900 py-2 block"
                                    onClick={closeMenu}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {currentPanel === 'service' && (
                      <motion.div
                        key="service"
                        custom={direction}
                        variants={menuVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="absolute inset-0 px-6 py-6 overflow-y-auto"
                      >
                        <h2 className="text-lg font-bold text-slate-900 mb-6">
                          {service.label}
                        </h2>
                        <div className="flex flex-col gap-y-4 pb-8">
                          {service.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="text-sm font-medium text-slate-900 py-2 block"
                              onClick={closeMenu}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {currentPanel === 'about' && (
                      <motion.div
                        key="about"
                        custom={direction}
                        variants={menuVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="absolute inset-0 px-6 py-6 overflow-y-auto"
                      >
                        <h2 className="text-lg font-bold text-slate-900 mb-6">
                          {about.label}
                        </h2>
                        <div className="flex flex-col gap-y-4 pb-8">
                          {about.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="text-sm font-medium text-slate-900 py-2 block"
                              onClick={closeMenu}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Button (Fixed at bottom) */}
                <div className="border-t border-slate-100 p-6 shrink-0 bg-white pb-8 relative z-20">
                  <Link
                    href="#contact"
                    onClick={closeMenu}
                    className="flex w-full items-center justify-center rounded-xl border-2 border-secondary py-3 px-6 text-sm font-bold text-secondary text-center hover:bg-secondary hover:text-white transition-colors"
                  >
                    {contact.label}
                  </Link>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

// --- Desktop Menus Implementation ---

export type SolutionMenuProps = MenuLink & {
  groups: {
    label: string;
    items: MenuLink[];
  }[];
};

export function SolutionMenu({ label, href, groups }: SolutionMenuProps) {
  const [openSolution, setOpenSolution] = useState(false);
  return (
    <Popover
      onMouseEnter={() => setOpenSolution(true)}
      onMouseLeave={() => setOpenSolution(false)}
      as="div"
    >
      <NavLink href={href}>{label}</NavLink>
      <MenuTransition open={openSolution}>
        <PopoverPanel className="absolute -inset-x-10 top-16 mt-0.5 bg-white border-b-2 shadow-sm rounded-b-xl">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-5 lg:px-8">
            {groups.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm leading-6 text-secondary font-semibold">
                  {group.label}
                </h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {group.items.map((item) => (
                      <NavLink
                        key={item.label}
                        href={item.href}
                        className="flex gap-x-4 py-2 text-sm font-light leading-6 text-secondary"
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PopoverPanel>
      </MenuTransition>
    </Popover>
  );
}

export type ServiceMenuProps = MenuLink & {
  items: MenuLink[];
};

export function ServiceMenu({ label, href, items }: ServiceMenuProps) {
  const [openService, setOpenService] = useState(false);
  return (
    <Popover
      onMouseEnter={() => setOpenService(true)}
      onMouseLeave={() => setOpenService(false)}
      as="div"
    >
      <NavLink href={href}>{label}</NavLink>
      <MenuTransition open={openService}>
        <PopoverPanel className="absolute -right-20 z-10 top-16 mt-0.5 flex w-screen max-w-max -translate-x-1/2 px-4 bg-white border-b-2 shadow-sm rounded-b-xl">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-2 px-2 py-4 lg:grid-cols-2 lg:px-8">
            {items.map((item) => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </PopoverPanel>
      </MenuTransition>
    </Popover>
  );
}

export type AboutMenuProps = MenuLink & {
  items: MenuLink[];
};

export function AboutMenu({ label, href, items }: AboutMenuProps) {
  const [openService, setOpenService] = useState(false);
  return (
    <Popover
      onMouseEnter={() => setOpenService(true)}
      onMouseLeave={() => setOpenService(false)}
      as="div"
    >
      <NavLink href={href}>{label}</NavLink>
      <MenuTransition open={openService}>
        <PopoverPanel className="absolute left-[65%] z-10 top-16 mt-0.5 -translate-x-1/2 flex w-screen max-w-max px-4 bg-white border-b-2 shadow-sm rounded-b-xl">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-2 px-2 py-4 lg:px-8">
            {items.map((item) => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </PopoverPanel>
      </MenuTransition>
    </Popover>
  );
}
