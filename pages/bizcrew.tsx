import Seo from "../components/Seo";
import Image from "next/image";
import ConnectCard from "../components/ConnectCard";

import trainingroom from 'public/images/training-room.webp'

export default function Bizcrew() {

    return(
        <div>
            <Seo />
            <section className="px-6 pt-12 pb-12 mx-auto max-w-7xl lg:px-8 lg:pt-32">
                <div className="text-base leading-7 text-gray-700 max-w-7xl lg:px-8">
                    <p className="text-base font-semibold leading-7 uppercase text-malibu-300">Bizcrew</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experts Co-Piloting with you</h1>
                    <p className="mt-6 text-xl leading-8">
                    We are workforce strategy specialists who like to solve talent attraction and retention challenges.  Our mission is to co-pilot with business and talent to build greater employment connections.
                    </p>
                    <p className="mt-6 text-xl leading-8">Through our Talentverse diagnostic approach, we build friction-free hiring and onboarding experiences.</p>
                </div>
                <div className="mt-10 max-w-7xl">
                    <div className="grid items-start max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-4">
                            <div className="relative px-6 overflow-hidden bg-gray-900 shadow-2xl pt-80 sm:pt-[42rem] rounded-3xl pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                                <Image
                                    src={trainingroom}
                                    alt="Training Room"
                                    placeholder="blur"
                                    className="absolute inset-0 object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 pb-8 place-content-center">
                            <div className="text-lg leading-7 text-gray-700 lg:max-w-lg">
                                <div className="max-w-xl">
                                    <h2 className="pb-4 text-2xl font-bold sm:text-4xl">Expert advice - designing best workforce plan</h2>
                                    <p>We use our Talentverse <span className="text-malibu-300">3-stage</span> diagnostic to identify and minimize hiring friction for a better candidate experience.</p>
                                    <div className="py-4 mt-6 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Navigate</h3>
                                        <p>We carry out pulse diagnostic reviews on each new vacancy, to understand trend data towards building the best action plan.</p>
                                    </div>
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Employ</h3>
                                        <p>Through our diagnostic, we provide hiring options and the best deployment process for your vacancy assignment.</p>
                                    </div>
                                    <div className="py-4 mt-2">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Connect</h3>
                                        <ul className="pl-4 list-disc list-outside">
                                            <li className="pb-2">We provide onboarding plans and coaching for new hires and business during the first 90 and 180 days.</li>
                                            <li className="pb-2">Provide 1:1 Career Coaching and Development solutions. </li>
                                            <li className="pb-2">Offer business Change & Transitional employee solution advice. </li>
                                            <li className="pb-2">Provide support on employee offboarding solutions.</li>
                                        </ul>
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