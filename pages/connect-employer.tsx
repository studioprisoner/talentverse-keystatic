import Link from 'next/link'
import Seo from "../components/Seo";
import { EmployerContactForm } from '../components/EmployerConnectForm'


export default function ConnectEmployer() {

    return (

        <div>
            <Seo />
            <div className="py-12 sm:py-16">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="mb-10">
                        <h2 className="text-base font-semibold leading-7 uppercase text-malibu-300">Going on the journey with you</h2>
                        <h1 className="text-4xl font-bold text-shark-700">Employer Connect</h1>
                        <p className="mt-4 text-base leading-8 text-shark-500">Before take-off let us understand your end goals better.  </p>
                        <p className="text-base leading-8 text-shark-500">Our crew will connect with you soon to undertake a <span className="font-bold">pre-pulse</span> review, to understand your current and future workforce needs.</p>
                        <p className="text-base leading-8 text-shark-500">A further <span className="font-bold">pre-start</span> meeting will be confirmed to share initial feedback, and to implement the best workforce action plan.</p>
                    </div>
                    <div className="max-w-2xl pb-10 mx-auto lg:max-w-none">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                    New Vaccancy
                                </dt>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li><Link href="/approach" className="text-malibu-300 hover:underline hover:text-shark-700">Our Apporach</Link></li>
                                        <li><Link href="/connect-employer#industry" className="text-malibu-300 hover:underline hover:text-shark-700">Industy Experience</Link></li>
                                        <li><Link href="/connect-employer#industry" className="text-malibu-300 hover:underline hover:text-shark-700">Frequency Asked Questions</Link></li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                    Our Services
                                </dt>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Talent navigate</li>
                                        <li>Talent employ</li>
                                        <li>Talent connect</li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                    Client Information
                                </dt>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Privacy Policy</li>
                                        <li>Terms of business</li>
                                        <li>Insurance cover</li>
                                        <li>Work Health &amp; Safety</li>
                                        <li>Human Resources support</li>
                                    </ul>
                                </dd>
                            </div>
                        </div>
                    </div>
                    <EmployerContactForm />
                    <div id="#industry" className="py-12 sm:py-16">
                        <div className="px-6 mx-auto max-w-7xl lg:px-8">
                            <div className="flex flex-col">
                                <dt className="flex items-center pb-2 text-2xl font-bold leading-7 text-malibu-300 gap-x-3">
                                    Inudstry Experience
                                </dt>
                                <dd className="text-shark-700">Our talent experts provide support across various industry sectors that include:</dd>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Automotive</li>
                                        <li>Business Support</li>
                                        <li>Construction and Maintenance</li>
                                        <li>Engineering and Technical</li>
                                        <li>Mining and Resources</li>
                                        <li>Warehousing and Logistics</li>
                                    </ul>
                                </dd>
                            </div>

                        </div>
                    </div>
                    <div id="#faq" className="py-12 sm:py-16">
                        <div className="px-6 mx-auto max-w-7xl lg:px-8">
                            <h2 className="pb-2 text-2xl font-bold text-malibu-300">Frequrently Asked Questions</h2>
                            <div className="mt-10 lg:col-span-7 lg:mt-0">
                                <dl className="space-y-10">
                                    <div>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">I need to get new staff urgently so can I call you first?</dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">Yes of course! Please phone us and we will walk you through our next steps to finding you that person you need.</dd>
                                    </div>
                                    <div>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">Can I register multiple vacancies with you at a time?</dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">Yes you can. Our online enquiry system is designed for one new job vacancy type at a time. However, if you have more than one type of vacancy please phone us, otherwise upload each one.</dd>
                                    </div>
                                    <div>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">What labour hiring services do you offer?</dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">It depends on your workforce needs and we provide various options that include:</dd>
                                    <h3 className="font-semibold text-malibu-300">Permanent</h3>
                                    <dd className="text-base leading-7 text-gray-600">We provide permanent direct hires based on success fee arrangement. All permanent talent hires come with our concierge and retention payment guarantee.</dd>
                                    <h3 className="font-semibold text-malibu-300">Temporary Contract</h3>
                                    <dd className="text-base leading-7 text-gray-600">We understand peaks in work demands, special projects needing extra resources. We provide fully insured flexible contract temporary staff, for short or longer-term assignments. We provide temporary to permanent try before you hire arrangements during the probation period.</dd>
                                    <h3 className="font-semibold text-malibu-300">Recruitment Process Outsourcing (RPO)</h3>
                                    <dd className="text-base leading-7 text-gray-600">When a business transfers all or part of their permanent recruitment for us to manage as an extension of your team. Typically working onsite with you providing our end-to-end full talent recruitment and using our systems.</dd>
                                    <h3 className="font-semibold text-malibu-300">Contingent Project Experts</h3>
                                    <dd className="text-base leading-7 text-gray-600">We have various experts who provide specialist advice and services that can be hired temporary or on fixed term arrangement, depending on your project needs.</dd>
                                    </div>
                                </dl>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}