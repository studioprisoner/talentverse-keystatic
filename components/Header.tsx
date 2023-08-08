import { usePathname } from "next/navigation";
import { cx } from "../utils/cx";
import React from "react";
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export const baseClasses =
  "no-underline justify-center items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 text-malibu-300 uppercase px-0 hover:text-cyan-700 hover:bg-none bg-none font-medium shrink-0";

export const NavItems = [
  {
    name: "Connect",
    slug: "/connect",
    description: "Conncet with Us",
  },
  {
    name: "Our Approach",
    slug: "/approach",
    description: "Take a look at our approach.",
  },
  {
    name: "Integrated Services",
    slug: "/services",
    description: "Bizcrew, Catchzone, Coffee & Career",
  },
  {
    name: "About Us",
    slug: "/about",
    description: "Learn more about us.",
  },
];

export const connectLinks = [
  { name: 'Employer', href: '/connect-employer' },
  { name: 'Seeker', href: '/connect-seeker' },
]

export const services = [
  { name: 'Bizcrew', href: '/bizcrew'},
  { name: 'Catchzone', href: '/catchzone'},
  { name: 'Coffee & Career', href: '/coffee-career'},
]

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const MobileMenu = () => {
    return (
      <div className="z-10 float-right max-w-md p-4 mx-4 -mt-1 bg-white rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
        {/* Nav items */}
        <div className="grid grid-flow-row not-prose">
          <ul className="py-2 font-semibold uppercase">
            <li className="mt-4 text-malibu-300"><a href="/connect" title="Connect With Us">Connect</a></li>
            <li className="mt-4 text-malibu-300"><a href="/approach" title="Our Approach">Our Approach</a></li>
            <li className="mt-4">
              <ul>
                <span className=" text-malibu-300">Integrated Services</span>
                <li  className="mt-4 ml-4 text-sm text-shark-300"><a href="/bizcrew" title="Bizcrew">Bizcrew</a></li>
                <li  className="mt-4 ml-4 text-sm text-shark-300"><a href="/catzhzone" title="Bizcrew">Catchzone</a></li>
                <li  className="mt-4 ml-4 text-sm text-shark-300"><a href="/coffee-careers" title="Bizcrew">Coffee &amp; Careers</a></li>
              </ul>
            </li>
            <li className="mt-4 text-malibu-300"><a href="/about">About Us</a></li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <header className="inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex lg:flex-1">
          <a
            className="text-xl font-bold no-underline"
            href="/"
            aria-label="Link to home page"
          >
            <img
              src="talentverse-logo.svg"
              alt="Talentverse Logo"
              className="w-auto h-16 sm:h-20"
            />
          </a>
        </div>
        {/* Mobile Hamburger Icon button */}
        <nav className="-mr-2 min-[768px]:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 bg-white rounded-md text-malibu-300 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6 stroke-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 stroke-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            )}
          </button>
        </nav>
        {/* Desktop nav */}
        <nav className="items-center space-x-8 hidden min-[768px]:flex">
        <Popover className="relative">
            <Popover.Button className={cx(baseClasses, "border-transparent")} >
              <span>Connect</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 transalte-y-0"
              leave="tranistion ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 flex w-screen px-4 mt-5 -translate-x-1/2 left-1/2 max-w-max">
                <div className="flex-auto w-screen max-w-sm p-4 text-sm leading-6 bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5">
                {connectLinks.map((item) => (
                  <div key={item.name} className="relative p-4 rounded-lg hover:bg-gray-50">
                    <a href={item.href} className="font-semibold uppercase text-shark-500">{item.name}<span className="absolute inset-0" /></a>
                  </div>
                ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a className={cx(baseClasses, pathname === '/approach' ? "border-shark-700 border-b-2" : "border-transparent")} href="/approach">Our Approach</a>
          <Popover className="relative">
            <Popover.Button className={cx(baseClasses, "border-transparent")} >
              <span>Intergrated Services</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 transalte-y-0"
              leave="tranistion ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 flex w-screen px-4 mt-5 -translate-x-1/2 left-1/2 max-w-max">
                <div className="flex-auto w-screen max-w-sm p-4 text-sm leading-6 bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5">
                {services.map((item) => (
                  <div key={item.name} className="relative p-4 rounded-lg hover:bg-gray-50">
                    <a href={item.href} className="font-semibold uppercase text-shark-500">{item.name}<span className="absolute inset-0" /></a>
                  </div>
                ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a className={cx(baseClasses, pathname === '/about' ? "border-shark-700 border-b-2" : "border-transparent")} href="/about">About Us</a>
        </nav>
      </div>
      {menuOpen ? <MobileMenu /> : null}
    </header>
  );
};

export default Header;
