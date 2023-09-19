import Seo from "../components/Seo";
import Image from "next/image";
import ConnectCard from "../components/ConnectCard";

import coffeeshop from 'public/images/people-meeting-for-coffee.webp'

export default function Coffeecareer() {

    return(
        <div>
            <Seo />
            <section className="px-6 pt-12 pb-12 mx-auto max-w-7xl lg:px-8 lg:pt-32">
                <div className="text-base leading-7 text-gray-700 max-w-7xl lg:px-8">
                    <p className="text-2xl font-semibold leading-7 uppercase text-malibu-300">Coffee &amp; Careers</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Talent Connection &amp; Mentoring </h1>
                    <p className="mt-2 text-xl leading-8">We understand any new employment investment is important for both business and employees.</p>
                    <p className="mt-2 text-xl leading-8">Having an on-boarding plan ready especially during the first 90 - 180 days, becomes very important.</p>
                    <p className="mt-2 text-xl leading-8">Through our Coffee & Careers services we co-pilot with both business and new hires, to enable longer lasting connection.</p>
                </div>
                <div className="mt-10 max-w-7xl">
                    <div className="grid items-start max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-4">
                            <div className="relative px-6 overflow-hidden bg-gray-900 shadow-2xl pt-80 sm:pt-[42rem] rounded-3xl pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                                <Image
                                    src={coffeeshop}
                                    alt="Training Room"
                                    placeholder="blur"
                                    className="absolute inset-0 object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 pb-8 place-content-center">
                            <div className="text-lg leading-7 text-gray-700 lg:max-w-lg">
                                <p>Our Coffee & Career employee connection programs keep the connection flowing.</p>
                                <div className="max-w-xl">
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Onboard</h3>
                                        <p><span className="font-semibold text-malibu-300">Concierge Connect</span> - provided complimentary during early stages of employment.</p>
                                        <p><span className="font-semibold text-malibu-300">Plan &amp; Mentor</span> - planning and mentoring programs to support new hire;s during first 90-180-day probation.</p>
                                        <p><span className="font-semibold text-malibu-300">Pulse Plus</span> - early connect employee pulse feedback to understand key friction for better connection.</p>
                                    </div>
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="text-2xl font-semibold text-malibu-300">Engage</h3>
                                        <p><span className="font-semibold text-malibu-300">Career Navigation</span> - 1:1 and team pulse surveys and career development planning post 180-day probation period.</p>
                                        <p><span className="font-semibold text-malibu-300">Change &amp; Transition </span> - 1:1 and team business change ready mentoring and advice.</p>
                                        
                                    </div>
                                    <div className="py-4 mt-2">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Offboard</h3>
                                        <p><span className="font-semibold text-malibu-300">Outplacement</span> - 1:1 career navigation, mentoring and resume services.</p>
                                        <p><span className="font-semibold text-malibu-300">Pulse Plus</span> - 1:1 offboarding pulse exit surveys and feedback.</p>
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