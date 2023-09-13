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
                    <p className="text-base font-semibold leading-7 uppercase text-malibu-300">Coffee &amp; Careers</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Talent Connection &amp; Coaching </h1>
                    <p className="mt-2 text-xl leading-8">Employing key talent is an important investment, and retaining them more important for long-term business success.</p>
                    <p className="mt-2 text-xl leading-8">Therefore, having an <span className="font-bold">on-boarding plan</span> and job environment ready for new hires, especially during the first <span className="font-bold">90-180</span> days is really important. Through our <span className="text-malibu-500">Coffee &amp; Careers</span> platform and programs, we support new-hires and business to connect for happier retention.</p>
                    <p className="mt-2 text-xl leading-8">Our Talentverse experts are certified and experienced to partner with employees and business, through the whole working journey.</p>
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
                                <p>Our Coffee & Careers employee connection programs safeguard your talent investment return.</p>
                                <div className="max-w-xl">
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Onboard</h3>
                                        <p><span className="font-semibold text-malibu-300">Concierge Support</span> - Offer complimentary concierge support for every new hire, during early stages.</p>
                                        <p><span className="font-semibold text-malibu-300">Planning &amp; Coaching</span> - Provide additional comprehensive Career planning and coaching programs during first 90 - and 180-day probation periods.</p>
                                        <p><span className="font-semibold text-malibu-300">Pulse Experience Reviews</span> - Provide early employee pulse surveys to understand better key friction areas to engagement. </p>
                                    </div>
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="text-2xl font-semibold text-malibu-300">Engage</h3>
                                        <p><span className="font-semibold text-malibu-300">Career Development</span> - Provide 1:1 and team engagement pulse reviews, and feedback actions. Coffee & Career business worksite set up and programs.</p>
                                        <p><span className="font-semibold text-malibu-300">Change &amp; Transitional Support </span> - Provide business restructure, right sizing and mergers & acquisition connection support.  </p>
                                        
                                    </div>
                                    <div className="py-4 mt-2">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Offboard</h3>
                                        <p><span className="font-semibold text-malibu-300">Outplacement Solutions</span> - Employee career planning, profiling, coaching and resume services.</p>
                                        <p><span className="font-semibold text-malibu-300">Offboarding Pulse Surveys</span> - Employee 1:1 offboarding pulse surveys to enable better hiring and retention outcomes.</p>
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