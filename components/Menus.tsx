'use client';
import { Fragment, useState } from 'react';
import {
  Popover,
  Transition,
  PopoverPanel,
  PopoverButton,
  PopoverOverlay,
  TransitionChild,
} from '@headlessui/react';
import { NavLink } from '@/components/NavLink';
import { clsx } from 'clsx';

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

type MobileMenuProps = {
  menu: MenuLink[];
};

export function MobileMenu({ menu }: MobileMenuProps) {
  return (
    <div className="-mr-1 md:hidden">
      <Popover>
        <PopoverButton
          className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
          aria-label="Toggle Navigation"
        >
          {({ open }) => (
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                  'origin-center transition',
                  open && 'scale-90 opacity-0'
                )}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx(
                  'origin-center transition',
                  !open && 'scale-90 opacity-0'
                )}
              />
            </svg>
          )}
        </PopoverButton>
        <Transition>
          <TransitionChild
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <PopoverOverlay className="fixed inset-0 bg-slate-300/50" />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <PopoverPanel
              as="div"
              className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
            >
              {menu.map((item) => {
                if (typeof item === 'string') {
                  return null;
                }
                return (
                  <PopoverButton
                    key={item.label}
                    as={NavLink}
                    href={item.href}
                    className="block w-full p-2"
                  >
                    {item.label}
                  </PopoverButton>
                );
              })}
            </PopoverPanel>
          </TransitionChild>
        </Transition>
      </Popover>
    </div>
  );
}

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
        <PopoverPanel className="absolute -right-20 z-10 top-16 mt-0.5 flex w-screen max-w-max -translate-x-1/3 px-4 bg-white border-b-2 shadow-sm rounded-b-xl">
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
