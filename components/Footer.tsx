import { usePathname } from "next/navigation";
import { FadeIn } from './FadeIn'
import Link from "next/link";

const footerlinks = [
  {
  title: 'Talent Services',
  links: [
    { title: 'Bizcrew', href: '#' },
    { title: 'Catchzone', href: '#' },
    { title: 'Coffee & Career', href: '#' },
    ],
  },
  {
    title: 'Our Company',
    links: [
      { title: 'Our Approach', href: '#' },
      { title: 'About Us', href: '#' },
      { title: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { title: 'Facebook', href: '#' },
      { title: 'Instagram', href: '#' },
      { title: 'LinkedIn', href: '#' },
    ],
  },
]

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}
export default function Footer() {
    return (
    <footer className="px-6 pt-12 mx-auto max-w-7xl lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <nav>
            <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {footerlinks.map((section) => (
                <li key={section.title}>
                  <div className="text-base font-semibold uppercase font-dm-sans text-malibu-300">
                    {section.title}
                  </div>
                  <ul role="list" className="mt-4 text-base font-dm-sans text-neutral-500">
                    {section.links.map((link) => (
                      <li key={link.title} className="mt-4">
                        <Link
                          href={link.href}
                          className="transition hover:text-neutral-700"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            </nav>
            <div className="flex lg:justify-end">
            <form className="max-w-sm">
              <h2 className="text-base font-semibold uppercase font-dm-sans font-display text-malibu-300">
                Sign up for our newsletter
              </h2>
              <p className="mt-4 text-base font-dm-sans text-neutral-500">
                Subscribe to get the latest news, articles, resources and more.
              </p>
              <div className="relative mt-6">
                <input
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  aria-label="Email address"
                  className="block w-full py-4 pl-6 pr-20 transition bg-transparent border rounded-2xl border-neutral-300 text-base/6 text-neutral-950 ring-4 ring-transparent placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                />
                <div className="absolute flex justify-end inset-y-1 right-1">
                  <button
                    type="submit"
                    aria-label="Submit"
                    className="flex items-center justify-center h-full text-white transition aspect-square rounded-xl bg-neutral-950 hover:bg-neutral-800"
                  >
                    <ArrowIcon className="w-4" />
                  </button>
                </div>
              </div>
            </form>
            </div>
          </div>
          <div className="flex flex-wrap items-end justify-between pt-12 mt-24 mb-20 border-t gap-x-6 gap-y-4 border-neutral-950/10">
          <Link href="/" aria-label="Home">
          <img
                className="w-auto h-16 sm:h-20"
                src="talentverse-logo.svg"
                alt=""
              />
          </Link>
          <p className="text-sm text-neutral-500">
            © Bizcrew Pty Ltd t/as Talentverse. {new Date().getFullYear()} ABN 55 663 912 927. All rights reserved. Employment Agent EA3053
          </p>
        </div>
        </FadeIn>

    </footer>
  )
}

