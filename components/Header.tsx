import { usePathname } from "next/navigation";
import { cx } from "../utils/cx";
import React from "react";

export const baseClasses =
  "no-underline justify-center items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 text-gray-800 px-0 hover:text-cyan-700 hover:bg-none bg-none font-medium shrink-0";

export const NavItems = [
  {
    name: "Connect",
    slug: "/",
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

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const MobileMenu = () => {
    return (
      <div className="z-10 float-right max-w-md p-4 mx-4 -mt-1 bg-white rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
        {/* Nav items */}
        <div className="grid grid-flow-row not-prose">
          {NavItems.map((item) => (
            <a
              key={item.slug}
              className={
                "pb-5 first:pt-3 px-3 last:pb-3 pt-5 border-b-2 border-slate-100 border-spacing-2 last:border-b-0 no-underline"
              }
              href={item.slug}
            >
              <p
                className={cx(
                  pathname === item.slug ? "text-text-cyan-700" : "",
                  "my-0 pb-2 font-bold"
                )}
              >
                {item.name}
              </p>
              <p className="my-0">{item.description}</p>
            </a>
          ))}
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
            className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
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
          {NavItems.map((item) => (
            <a
              key={item.slug}
              className={cx(
                baseClasses,
                pathname === item.slug
                  ? "border-text-cyan-700 border-b-2"
                  : "border-transparent"
              )}
              href={item.slug}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      {menuOpen ? <MobileMenu /> : null}
    </header>
  );
};

export default Header;
