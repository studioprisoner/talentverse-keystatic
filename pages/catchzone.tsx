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
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tailored Hiring Solutions</h1>
                    <p className="mt-6 text-xl leading-8">We understand the best return on investment in hiring and retaining talent, requires a specialist approach. We also know in candidate driven markets, that a <span className="font-bold">more fluid</span> approach towards workforce management becomes important. </p>
                    <p className="mt-6 text-xl leading-8">Through our Catchzone platform our Talent experts’ co-pilot to select and implement the best hiring solutions.</p>
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
                                <p>Depending on your employment option you choose, all solutions follow our 3-step hiring methodology process.</p>
                                <div className="max-w-xl">
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Direct Staffing</h3>
                                        <p><span className="font-semibold text-malibu-300">Permnanent Placement</span> - we provide permanent direct placement based on a success fee. All permanent placements come with our retention payment guarantee.</p>
                                        <p><span className="font-semibold text-malibu-300">Flexible Hire</span> - we understand peaks in work-demand and special projects require extra resources. We provide temporary hire for short - to longer-term assignments. Additional Temporary to Permanent try before you hire service, during probation periods.</p>
                                    </div>
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="text-2xl font-semibold text-malibu-300">Recruitment Process Outsourcing - (RPO) </h3>
                                        <p className="pb-2 text-base">We provide tailored RPO services to fully or partially manage your Companies recruitment service, as an extension of your team. Onsite or remotely, we provide the expertise, systems and risk controls.</p>
                                        <p><span className="font-semibold text-malibu-300">Full RPO</span> - service includes our 3-stage pulse diagnostic, workforce plan, Company EVP brand assessment and tailored hiring pipeline processing.</p>
                                        <p className="mt-1 text-sm italic text-gray-400">Extra optional: includes new hire onboarding plan and services.</p>
                                        <p className="pt-2"><span className="font-semibold text-malibu-300">Project RPO</span> - provide same services over specific project time period.</p>
                                    </div>
                                    <div className="py-4 mt-2">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Contingent Experts</h3>
                                        <p>We have experts who provide specialist support for your project or team relief across most Business Support Service functions. Hire options include: Temporary or fixed term contract arrangements, depending on your need.</p>
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