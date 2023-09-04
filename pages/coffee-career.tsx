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
                    <p className="mt-2 text-xl leading-8">Attracting and hiring talent is a big investment. Therefore, we understand the candidate hiring and onboarding experience is crucial in the retention investment. </p>
                    <p className="mt-2 text-xl leading-8">Through our <span className="font-semibold text-malibu-300">Coffee &amp; Careers</span> service platform we provide tailored new hire onboarding and through work-life solutions.</p>
                    <p className="mt-2 text-xl leading-8">Our expert coaches are Talentverse trained and certified, and industry experienced to co-pilot with employees and business for longer-term employment connection.</p>
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
                                <p>We know the importance of early employment connection. Our new employee connection programs ensure the talent investment return.</p>
                                <div className="max-w-xl">
                                    <div className="py-4 mt-6 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Onboard</h3>
                                        <p><span className="font-semibold text-malibu-300">Concierge Support </span> - We provide Concierge support for every new hire during early stages of employment.</p>
                                        <p><span className="font-semibold text-malibu-300">TemCareer Planning &amp; Coaching</span> - We offer more comprehensive career planning and coaching for new hires and business during the first 90 and 180-day periods. New Employee early connection experience pulse reviews.</p>
                                    </div>
                                    <div className="py-4 mt-6 border-b-2 border-gray-100">
                                        <h3 className="text-2xl font-semibold text-malibu-300">Engage</h3>
                                        <p><span className="font-semibold text-malibu-300">Career Development</span> - Employee experience 1:1 and team pulse reviews and feedback. 1:1 Employee career planning and development programs for post probation stages of employment.</p>
                                        <p className="text-sm italic">Optional serices included new hire onboarding plan and coaching.</p>
                                    </div>
                                    <div className="py-4 mt-6 border-b-2 border-gray-100">
                                        <h3 className="pb-2 text-2xl font-semibold text-malibu-300">Offboard</h3>
                                        <p><span className="font-semibold text-malibu-300">Change & Transition Services</span> - Business restructure, right sizing, mergers & acquisition and Employee connection support and advice.</p>
                                        <p><span className="font-semibold text-malibu-300">Outplacement Solutions</span> - 1:1 Employee career planning, brand profiling, coaching and resume services.</p>
                                        <p><span className="font-semibold text-malibu-300">Offboarding Pulse Surveys</span> - 1:1 confidential Employee offboarding pulse surveys and reports to enable better hiring and retention outcomes.</p>
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