import Seo from "../components/Seo";
import Image from "next/image";

import trainingroom from 'public/images/training-room.webp'

export default function Approach() {

    return (
        <div>
            <Seo />
            <section className="px-6 pt-12 pb-12 mx-auto max-w-7xl lg:px-8 lg:pt-32">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight lg:text-6xl text-shark-700">Expert Advice - Navigating the best plan ahead.</h1>
                </div>
                <div className="px-2 py-16 mx-auto max-w-7xl sm:py-20 lg:px-8">
                    <div className="max-w-2xl mx-auto lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <div className="max-w-xl mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <h2 className="font-semibold uppercase text-1xl text-malibu-300">Friction Free Navigation</h2>
                        <p className="text-lg leading-8 text-gray-500">
                        We co-pilot with Employers and Career Seekers to navigate the best employment connection outcomes.
                        </p>
                        <h2 className="mt-4 font-semibold uppercase text-1xl text-malibu-300">Hiring Risk Mitigation</h2>
                        <p className="text-lg leading-8 text-gray-500">
                        We focus on a <span className="text-malibu-300">proactive</span> and <span className="text-malibu-300">risk management</span> approach, in identifying potential friction barriers to engagement through our pulse review.
                        </p>
                        <h2 className="mt-4 font-semibold uppercase text-1xl text-malibu-300">Pre-Start Ready</h2>
                        <p className="text-lg leading-8 text-gray-500">
                        Through our pre-start 3 step approach we co-create a tailored hiring and engagement plan, for the journey ahead.
                        </p>
                        </div>
                        <Image
                            src={trainingroom}
                            alt=""
                            className="object-cover w-full max-w-lg mt-10 sm:w-2/4 sm:ml-20 sm:mt-0 rounded-2xl xl:row-span-2 xl:row-end-2"
                        />
                    </div>
                </div>
            </section>
            <div aria-label="slider" className="flex justify-center mx-auto max-w-7xl">
                <div className="sticky top-0 hidden w-full h-10 rounded-xl sm:flex bg-shark-700">
                    <div className="flex justify-between bg-malibu-300 rounded-xl">
                        <div className="px-10 py-2 text-sm uppercase">
                            Pulse
                        </div>
                        <div className="px-10 py-2 text-sm uppercase">
                            Pre-Start
                        </div>
                        <div className="px-10 py-2 text-sm uppercase">
                            Plan
                        </div>
                    </div>
                    <div className="flex justify-between rounded-xl">
                        <div className="px-10 py-2 text-sm text-white uppercase">
                            Attract
                        </div>
                        <div className="px-10 py-2 text-sm text-white uppercase">
                            Source
                        </div>
                        <div className="px-10 py-2 text-sm text-white uppercase">
                            Assess
                        </div>
                    </div>
                    <div className="flex justify-between rounded-xl">
                        <div className="px-10 py-2 text-sm text-white uppercase">
                            On Board
                        </div>
                        <div className="px-10 py-2 text-sm text-white uppercase">
                            Engage
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-4 sm:py-16">
                <div className="px-4 sm:px-0 sm:mx-auto sm:max-w-6xl">
                    <div>
                        <div className="pb-0 mb-16 sm:mb-0 sm:relative sm:pb-24">
                            <span className="hidden absolute top-0 left-1/2 ml-[-30px] w-[60px] h-[60px] sm:block text-center leading-9 bg-gray-700 text-white text-[18px] font-semibold rounded-[50%] border-8 border-white border-solid z-[4]">1</span>
                            <div className="justify-between block sm:flex">
                            <div className="w-[100%] sm:w-[48%]">
                                <div className="mb-8 sm:mb-0">
                                    <img
                                        src="images/expertnav-image.png"
                                        className="h-auto max-w-full"   
                                    />
                                </div>
                            </div>
                            <div className="w-full sm:w-[48%]">
                                <div className="pl-0 ml-0 sm:ml-20">
                                    <h3 className="mt-0 mb-4 text-lg font-semibold leading-5 uppercase text-malibu-300">
                                    Expert Navigation
                                    </h3>
                                    <p className="pb-6 mt-0 mb-6 text-base border-b-2 border-gray-100 text-shark-700">Providing expert advice based on real job data, reducing friction factors to hiring employment.</p>
                                    <div className="text-sm text-gray-500">
                                    <p className="mt-6"><strong>Pulse</strong> review assesses specific job demographic data to enable best hire and employment connection.</p>
                                    <p className="mt-6"><strong>Pre-Start</strong> consult sessions made available to further understand your current and future hiring needs.</p>
                                    <p className="mt-6"><strong>Plan</strong> pecifically created to create the best hiring and employment experience.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <span className="hidden overflow-hidden left-1/2 ml-[-1px] sm:block absolute w-[2px] h-full bg-gray-300 top-0 z-[2]"></span>
                        </div>
                        <div className="relative pb-0 sm:pb-24">
                            <span className="hidden absolute top-0 left-1/2 ml-[-30px] w-[60px] h-[60px] sm:block text-center leading-[36px] bg-gray-700 text-white text-[18px] font-semibold rounded-[50%] border-8 border-white border-solid z-[4]">2</span>
                            <div className="justify-between block sm:flex even:flex-row-reverse">
                            <div className="w-full sm:w-[48%]">
                                <div className="mb-8 sm:ml-20 ml:0 sm:mb-0">
                                    <img
                                        src="images/talent-search.png"
                                        className="h-auto max-w-full"   
                                    />
                                </div>
                            </div>
                            <div className="w-full sm:w-[48%]">
                                <div className="mb-8 even:pl-0 even:pr-0 even:mb-0">
                                    <h3 className="mt-0 mb-4 text-lg font-semibold leading-5 uppercase text-malibu-300">
                                    Talent Search
                                    </h3>
                                    <p className="pb-6 mt-0 mb-6 text-base border-b-2 border-gray-100 text-shark-700">Partner services made available to manage and mobilise your complete hiring requirements, on-site or remotely.</p>
                                    <div className="text-sm text-gray-500">
                                    <p className="mt-6"><strong>Attract</strong> provides job focused EVP solutions specific to the job demographic hiring and employment plan.</p>
                                    <p className="mt-6"><strong>Source</strong> job hire specific pipeline screening, specifically tailored for better applicant connection.</p>
                                    <p className="mt-6"><strong>Assess</strong> job hire assessment guarantees all compliance and the other statutory assessment criteria are fully met.</p>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <span className="hidden sm:block overflow-hidden left-1/2 ml-[-1px] absolute w-[2px] h-full bg-gray-300 top-0 z-[2]"></span>
                        </div>
                        
                        <div className="relative py-12 overflow-hidden bg-gray-900 isolate sm:py-32 rounded-3xl">
                            <img
                                src="images/professional_woman_workplace.webp"
                                alt=""
                                className="absolute inset-0 object-cover w-full h-full -z-10"
                            />
                            <div
                                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                                aria-hidden="true"
                            >
                                <div
                                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                                style={{
                                    clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                                />
                            </div>
                            <div
                                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                                aria-hidden="true"
                            >
                                <div
                                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                                style={{
                                    clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                                />
                            </div>
                            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                                <div className="max-w-2xl mx-auto lg:mx-0">
                                <h2 className="pb-12 text-4xl font-bold tracking-tight text-white sm:text-6xl">The Job</h2>
                                <p className="mt-6 text-lg leading-8 text-white">
                                Our integrated approach connects outcomes.
                                </p>
                                </div>
                            </div>
                            </div>

                        <div className="mb-16 b-0 sm:mb-0 sm:relative sm:pb-24">
                            <span className="hidden absolute top-0 left-1/2 ml-[-30px] w-[60px] h-[60px] sm:block text-center leading-9 bg-gray-700 text-white text-[18px] font-semibold rounded-[50%] border-8 border-white border-solid z-[4]">3</span>
                            <div className="justify-between block sm:flex">
                            <div className="w-full sm:w-[48%]">
                                <div className="pl-0 ml-0 sm:ml-20">
                                    <img
                                        src="images/talent-connect-graphic.png"
                                        className="h-auto max-w-full"   
                                    />
                                </div>
                            </div>
                            <div className="w-full sm:w-[48%]">
                                <div className="pl-0 ml-0 sm:ml-20">
                                    <h3 className="mt-0 mb-4 text-lg font-semibold leading-5 uppercase text-malibu-300">
                                    Talent Connect
                                    </h3>
                                    <p className="pb-6 mt-0 mb-6 text-base border-b-2 border-gray-100 text-shark-700">Providing expert advice based on real job data, reducing friction factors to hiring employment.</p>
                                    <div className="text-sm text-gray-500">
                                    <p className="mt-6"><strong>On-Board</strong> a free concierge support service for new employees and hiring managers.</p>
                                    <p className="mt-6"><strong>Engage</strong> services provide expert concierge advice through all stages of employment.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <span className="hidden sm:block overflow-hidden left-1/2 ml-[-1px] absolute w-[2px] h-full bg-gray-300 top-0 z-[2]"></span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                
            </section>
        </div>
    )
}