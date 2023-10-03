import Seo from "../components/Seo";
import Image from "next/image";
import ConnectCard from "../components/ConnectCard";

import trainingroom from 'public/images/woman-manager-in-office.webp'

export default function Bizcrew() {

    return(
        <div>
            <Seo />
            <section className="px-6 pt-12 pb-12 mx-auto max-w-7xl lg:px-8 lg:pt-32">
                <div className="text-base leading-7 text-gray-700 max-w-7xl lg:px-8">
                    <p className="text-2xl font-semibold leading-7 uppercase text-malibu-300">Bizcrew</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experts Co-Piloting with you</h1>
                    <p className="mt-6 text-xl leading-8">
                    We are workforce strategy specialists who solve employment attraction and retention challenges. Our mission is to co-pilot with you to build better employment connection outcomes.
                    </p>
                    <p className="mt-6 text-xl leading-8">Through our Talentverse diagnostic approach we design and make friction free hiring possible.</p>
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
                        <div className="grid grid-cols-1 pt-8 place-content-center">
                            <div className="text-lg leading-7 text-gray-700 lg:max-w-lg">
                                <div className="max-w-xl">
                                    <h2 className="pb-4 text-2xl font-bold sm:text-4xl">Specialist advice - designing the best workforce plan</h2>
                                    <p>We deploy our <span className="text-malibu-300">3-step</span> diagnostic approach across each one of our integrated service stages.</p>
                                    <div className="py-4 mt-6 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Navigate</h3>
                                        <p>We carry out pulse reviews on each new vacancy hire, to understand trend data towards building the best talent hiring plan.</p>
                                    </div>
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Employ</h3>
                                        <p>Through our talent plan we co-pilot to implement tailored hiring solutions that connect with key business outcomes.</p>
                                    </div>
                                    <div className="py-4 mt-2">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Connect</h3>
                                        <p>We partner to provide connection during on-boarding, engagement and off-boarding stages of employment.</p>
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