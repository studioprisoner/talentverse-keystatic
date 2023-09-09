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
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Career Coaching &amp; Connection</h1>
                    <p className="mt-2 text-xl leading-8">Employing key talent is an important investment, and keeping them is just as bigger one for commercial success.</p>
                    <p className="mt-2 text-xl leading-8">Having an <span className="font-bold">on-boarding plan</span> and work environment ready for new hires, especially during the first <span className="font-bold">90-days</span> has many business utilisation and retention upsides. Through our <span className="text-malibu-500">Coffee &amp; Careers</span> platform, we provide new-hires and business with onboarding and connection programs to protect your people investment.</p>
                    <p className="mt-2 text-xl leading-8">Our Talentverse Experts are internally certified and HR experienced to coach and mentor employees and business for longer-term employment connection investment.</p>
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
                                        <p><span className="font-semibold text-malibu-300">Concierge Support </span> - We offer concierge support for every new hire during early stages of employment.</p>
                                        <p><span className="font-semibold text-malibu-300">Career Planning &amp; Coaching</span> - We provide more comprehensive career planning and coaching for new hires and business during the first 90 and 180-day probation periods.  We carry out New Employee early connection experience pulse reviews, to understand better key friction areas.</p>
                                    </div>
                                    <div className="py-4 mt-2 border-b-2 border-gray-100">
                                        <h3 className="text-2xl font-semibold text-malibu-300">Engage</h3>
                                        <p><span className="font-semibold text-malibu-300">Career Development</span> - Employee 1 to 1 and team engagement experience pulse reviews and action feedback, career planning and development programs post probation.</p>
                                        <p className="mt-1 text-sm italic text-gray-400">Business restructure, right size, mergers & acquisition connection support. Performance improvement coaching and advice.</p>
                                    </div>
                                    <div className="py-4 mt-2">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Offboard</h3>
                                        <p><span className="font-semibold text-malibu-300">Outplacement Solutions</span> - 1 to 1 Employee career planning, brand profiling, coaching and resume services. </p>
                                        <p><span className="font-semibold text-malibu-300">Offboarding Pulse Surveys</span> - 1 to 1 confidential Employee offboarding pulse surveys and reports to enable better hiring and retention outcomes.</p>
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