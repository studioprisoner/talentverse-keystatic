import Seo from "../components/Seo";
import Image from "next/image";
import ConnectCard from "../components/ConnectCard";

import womanworking from 'public/images/woman-working-on-computer.webp'

export default function Catchzone() {

    return(
        <div>
            <Seo />
            <section className="px-6 pt-12 pb-12 mx-auto max-w-7xl lg:px-8 lg:pt-32">
                <div className="text-base leading-7 text-gray-700 max-w-7xl lg:px-8">
                    <p className="text-base font-semibold leading-7 uppercase text-malibu-300">Catchzone</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tailored Hiring Solutions </h1>
                    <p className="mt-6 text-xl leading-8">
                        We understand the war for talent needs a specialist approach to attracting and sourcing it. We also know in candidate driven market, that business must be more flexible on their hiring approach to workforce management.
                    </p>
                    <p className="mt-6 text-xl leading-8">Our expert crew partner with business to oversee the best outcome. Every new vacancy hire follows our <span className="text-malibu-300">4-stage attract, source, assess and mobilise</span> process. </p>
                </div>
                <div className="mt-10 max-w-7xl">
                    <div className="grid items-start max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-4">
                            <div className="relative px-6 overflow-hidden bg-gray-900 shadow-2xl pt-80 sm:pt-[42rem] rounded-3xl pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                                <Image
                                    src={womanworking}
                                    alt="Training Room"
                                    placeholder="blur"
                                    className="absolute inset-0 object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 pb-8 place-content-center">
                            <div className="text-lg leading-7 text-gray-700 lg:max-w-lg">
                                <p>Every business has unique workforce demands and needs. Through our Catchzone service platform, we provide tailored hiring solutions to meet them.</p>
                                <div className="max-w-xl">
                                    <div className="py-4 mt-6 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Direct Staffing</h3>
                                        <p><span className="font-semibold text-malibu-300">Permnanent</span> - We provide permanent direct hires based on success fee arrangement. All permanent talent hires come with our concierge and retention payment guarantee.</p>
                                        <p><span className="font-semibold text-malibu-300">Temporary</span> - We understand peaks in work demands, special projects needing extra resources. We provide fully insured flexible temporary staff, for short or longer-term assignments. Temporary to permanent try before you hire arrangements, during probation period.</p>
                                    </div>
                                    <div className="py-4 mt-6 border-b-2 border-gray-100">
                                        <h3 className="text-2xl font-semibold text-malibu-300">Recruitment Process Outsourcing - (RPO) </h3>
                                        <p className="pb-2 text-base">When a business transfer all or part of their permanent recruitment for us to manage as an extension of your team. Typically working onsite with you providing our end-to-end full talent recruitment services and systems.</p>
                                        <p><span className="font-semibold text-malibu-300">Full RPO</span> - Full RPO services includes vacancy friction pulse review, workforce plan, employer branding, attraction marketing, source and assessment process, and mobilisation compliance.</p>
                                        <p className="text-sm italic">Optional serices included new hire onboarding plan and coaching.</p>
                                        <p className="pt-2"><span className="font-semibold text-malibu-300">Project RPO</span> - Same as full RPO service over a shorter term. Offsite work options available.</p>
                                    </div>
                                    <div className="py-4 mt-6 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Contingent Experts</h3>
                                        <p>We have Crew Experts who provide Talent, HR and WHS specialist services and advice that can be hired temporary or on fixed term arrangement, depending on your project needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ConnectCard />
            </section>
        </div>
    )
}