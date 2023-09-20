import { FadeIn } from './FadeIn'
import Link from "next/link";

const footerlinks = [
  {
  title: 'Talent Services',
  links: [
    { title: 'Bizcrew', href: '/bizcrew' },
    { title: 'Catchzone', href: '/catchzone' },
    { title: 'Coffee & Careers', href: '/coffee-career' },
    ],
  },
  {
    title: 'Our Company',
    links: [
      { title: 'Our Approach', href: '/approach' },
      { title: 'About Us', href: '/about' },
      { title: 'Join Our Crew', href: '/joinourcrew' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { title: 'Facebook', href: 'https://www.facebook.com/autalentverse/' },
      { title: 'LinkedIn', href: 'https://www.linkedin.com/company/talentverseau/' },
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
              <div className="max-w-sm">
                <h2 className='text-base font-semibold uppercase font-dm-sans text-malibu-300'>Contact Us</h2>
                <div className='grid grid-cols-1 mt-4 text-base sm:grid-cols-2 gap-x-8 text-neutral-500'>
                  <div>
                    <p>+61 418 926 107</p>
                    <p>info@talentverse.com.au</p>
                  </div>
                  <div className='mt-2 sm:mt-0'>
                    <a href="https://maps.app.goo.gl/EKEaVtTJgwVJ6d7m8" target="_blank" className='underline hover:text-neutral-700'>
                      <p>Unit 1/32 Edward Street</p>
                      <p>Perth WA 6000</p>
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-end justify-between pt-12 mt-24 mb-20 border-t gap-x-6 gap-y-4 border-neutral-950/10">
          <Link href="/" aria-label="Home">
          <img
                className="w-auto h-16 sm:h-20"
                src="talentverse-logo.svg"
                alt="Talentverse Logo"
              />
          </Link>
          <p className="text-sm text-neutral-500">
            &copy; Bizcrew Pty Ltd t/as Talentverse. {new Date().getFullYear()} ABN 55 663 912 927. All rights reserved. Employment Agent EA3053 <Link href="/privacy" className="underline">Privacy Policy</Link>
          </p>
        </div>
        </FadeIn>

    </footer>
  )
}

