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
                    <p className="text-lg font-semibold leading-7 uppercase sm:text-2xl text-malibu-300">Catchzone</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Talent Employment tailored for you</h1>
                    <p className="mt-6 text-xl leading-8">We understand workforce management challenges can slow business down. Our integrated hiring approach takes the worry away providing you key talent, when you need it.</p>
                    <p className="mt-6 text-xl leading-8">Through our Catchzone hiring platform we partner to deliver on your workforce needs.</p>
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
                                <p>All selected employment options follow our <span className="text-malibu-300">3-step</span> hiring methodology process</p>
                                <div className="max-w-xl">
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Direct Staffing</h3>
                                        <p className="pb-2"><span className="font-semibold text-malibu-300">Permanent Hire</span> - direct permanent placement service based on a success fee. All placements come with our concierge retention guarantee.</p>
                                        <p><span className="font-semibold text-malibu-300">Flexible Hire</span> - temporary hire for short – to longer term resourcing assignments. Try before you hire service provided during probation periods.</p>
                                    </div>
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Recruitment Process Outsourcing - (RPO) </h3>
                                        <p className="pb-2">Tailored RPO services to support your inhouse business recruitment function as an extension to your team.</p>
                                        <p className="pb-2"><span className="font-semibold text-malibu-300">Hire RPO</span> -  includes our 3-stage job diagnostic, tailored workforce plan, EVP career brand review, geo fencing marketing plan, and risk-free hiring system, process and specialist support.</p>
                                        <p className="pb-2"><span className="font-semibold text-malibu-300">Complete RPO</span> -  includes onboarding review, plan and specialist mentor support services.</p>
                                        <p className="pt-2"><span className="font-semibold text-malibu-300">Project RPO</span> - hire RPO services but limited to project specific time period and internal/external resourcing options.</p>
                                    </div>
                                    <div className="py-4 mt-2">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Expert Hire</h3>
                                        <p className="pb-2">We have on demand experts available for temporary or fixed term contract services for projects across:</p>
                                        <ul className="text-base uppercase text-malibu-300">
                                            <li>Recruitment</li>
                                            <li>HR</li>
                                            <li>Safety</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="px-6">
                <ConnectCard />
            </div>
        </div>
    )
}