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
                    Our Integrated Services are available to deliver on objectives, at whatever stage of your journey plan. Our services focus on minimising the friction for both Employers and Career Seekers for a more engaged employment connection.    Bizcrew Talent Experts are industry experienced and Talentverse certified, to provide you the best sound advice.
                    </p>
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
                                    <div className="py-4 mt-6 border-b-2 border-gray-100"><p><span className="text-malibu-300">Expert Advice</span> - Support Employers and Career Seekers to identify and mitigate potential friction ahead, via the pre-start consultation, that includes your pulse check review and tailored employment plan.</p></div>
                                    <div className="py-4 mt-6 border-b-2 border-gray-100"><p><span className="text-malibu-300">Talent Search Navigation</span> - For Employers - oversee hiring assignments internal or externally, via the Catchzone service platform.</p>
                                        <p>For Career Seekers - providing concierge support when required to ensure a frictionless experience to employment.</p>
                                        </div>
                                    <div className="py-4 mt-2"><p><span className="text-malibu-300">Concierge Support</span> - For Employers & Career Seekers providing concierge services support through the post hire stages, via Coffee & Careers service platform.</p></div>
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