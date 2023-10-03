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
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Talent Connection through the journey</h1>
                    <p className="mt-2 text-xl leading-8">Having an employment partner to help navigate through the total employment journey is comforting. We support the employer - employee connection through the pre- hire, onboarding, engagement and offboarding stages.</p>
                    <p className="mt-2 text-xl leading-8">Using our Coffee & Careers platform and programs helps achieve greater retention outcomes.</p>
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
                                <p>Our Coffee &amp; Careers programs facilitate greater employment engagement and retention.</p>
                                <div className="max-w-xl">
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Onboard</h3>
                                        <p><span className="font-semibold text-malibu-300">Concierge Support</span> - provided with every new hire.</p>
                                        <p><span className="font-semibold text-shark-500">On Pulse</span> - mployee experience surveys to understand key friction to engagement during hiring and probation stages of employment.</p>
                                        <p><span className="font-semibold text-shark-500">Plan &amp; Mentor</span> - new employee optimised ready review, for hiring managers and employees during the first 90 - 180 days.</p>
                                    </div>
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="text-2xl font-semibold text-malibu-300">Engage</h3>
                                        <p><span className="font-semibold text-shark-500">Career Nav</span> - employee pulse surveys and journey development planning post-probation.</p>
                                        <p><span className="font-semibold text-shark-500">Change Readiness</span> - for teams during new business structural, system and or process change.</p>
                                        
                                    </div>
                                    <div className="py-4 mt-2">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Offboard</h3>
                                        <p><span className="font-semibold text-shark-500">Outplace</span> - employee transition career navigation, mentoring and resume services.</p>
                                        <p><span className="font-semibold text-shark-500">Off Pulse</span> - employee offboarding exit surveys for friction and improvement feedback.</p>
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