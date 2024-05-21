'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { Button } from './Button';
import { NavLink } from './NavLink';

import logoImg from '@/images/logos/logo.png';
import { getDictionary } from '@/server/get-dictionary';

export function Header({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['Menu'];
}) {
  const [openSolution, setOpenSolution] = useState(false);
  const [openService, setOpenService] = useState(false);

  return (
    <header className="pt-8 pb-6 shadow-sm">
      <nav className="relative z-50 flex justify-between mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:gap-x-12">
          <Link href="/trang-chu" aria-label="Home">
            <Image src={logoImg} alt="Home" className="h-10 w-auto" />
          </Link>
        </div>
        <div className="flex items-center gap-x-5 md:gap-x-8">
          <div className="hidden md:flex md:gap-x-12">
            <NavLink href={dictionary.home.href}>
              {dictionary.home.title}
            </NavLink>
            <Popover
              onMouseEnter={() => setOpenSolution(true)}
              onMouseLeave={() => setOpenSolution(false)}
              as="div"
            >
              <NavLink href={dictionary.solution.href}>
                {dictionary.solution.title}
              </NavLink>

              <Transition
                show={openSolution}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Popover.Panel className="absolute -inset-x-10 top-16 mt-0.5 bg-white border-b-2 shadow-sm rounded-b-xl">
                  <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-5 lg:px-8">
                    {Object.values(dictionary.solution.sub).map((item) => (
                      <div key={item.title}>
                        <h3 className="text-sm leading-6 text-secondary font-semibold">
                          {item.title}
                        </h3>
                        <div className="mt-6 flow-root">
                          <div className="-my-2">
                            {Object.values(item.sub).map((subItem) => (
                              <NavLink
                                key={subItem.title}
                                href={subItem.href}
                                className="flex gap-x-4 py-2 text-sm font-light leading-6 text-secondary"
                              >
                                {subItem.title}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover
              onMouseEnter={() => setOpenService(true)}
              onMouseLeave={() => setOpenService(false)}
              as="div"
            >
              <NavLink href={dictionary.service.href}>
                {dictionary.service.title}
              </NavLink>
              <Transition
                show={openService}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Popover.Panel className="absolute -right-20 z-10 top-16 mt-0.5 flex w-screen max-w-max -translate-x-1/2 px-4 bg-white border-b-2 shadow-sm rounded-b-xl">
                  <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-2 px-2 py-4 lg:grid-cols-2 lg:px-8">
                    {Object.values(dictionary.service.sub).map((item) => (
                      <NavLink key={item.title} href={item.href}>
                        {item.title}
                      </NavLink>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <NavLink href={dictionary.about.href}>
              {dictionary.about.title}
            </NavLink>
          </div>
          <Button>{dictionary.priceButton}</Button>
          <div className="-mr-1 md:hidden">
            <Popover>
              <Popover.Button
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
              </Popover.Button>
              <Transition.Root>
                <Transition.Child
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
                </Transition.Child>
                <Transition.Child
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    as="div"
                    className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
                  >
                    {Object.values(dictionary).map((item) => {
                      if (typeof item === 'string') {
                        return null;
                      }
                      return (
                        <Popover.Button
                          key={item.title}
                          as={NavLink}
                          href={item.href}
                          className="block w-full p-2"
                        >
                          {item.title}
                        </Popover.Button>
                      );
                    })}
                  </Popover.Panel>
                </Transition.Child>
              </Transition.Root>
            </Popover>
          </div>
        </div>
      </nav>
    </header>
  );
}
