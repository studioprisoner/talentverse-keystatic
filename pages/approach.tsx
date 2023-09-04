import Seo from "../components/Seo";
import Image from "next/image";
import ConnectCard from "../components/ConnectCard";

import trainingroom from 'public/images/training-room.webp'

export default function Approach() {

    return (
        <div>
            <Seo />
            <section className="px-6 pt-12 pb-12 mx-auto max-w-7xl lg:px-8 lg:pt-32">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight lg:text-6xl text-shark-700">Navigating the best talent journey experience. </h1>
                </div>
                <div className="px-2 py-16 mx-auto max-w-7xl sm:py-20 lg:px-8">
                    <div className="max-w-2xl mx-auto lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <div className="max-w-xl mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p className="text-lg leading-8 text-gray-500">
                        Talentverse provides a strategic workforce planning approach to your hiring needs. 
                        </p>
                        <p className="text-lg leading-8 text-gray-500">
                        Through our <span className="italic font-bold">talent navigation, search and connect integrated stages</span>, we have you covered at every phase of the talent employment life-cycle. 
                        </p>
                        <p className="text-lg leading-8 text-gray-500">
                        At every integrated stage we have dedicated specialist support service platform for you to benefit from through Bizcrew, Catchzone and Coffee & Careers. 
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
      
            <section className="py-4 sm:py-16">
                <div className="px-4 sm:px-0 sm:mx-auto sm:max-w-6xl">
                    <div>
                        <div className="pb-0 mb-16 sm:mb-0 sm:relative sm:pb-24">
                            <span className="hidden absolute top-0 left-1/2 ml-[-30px] w-[60px] h-[60px] sm:block text-center  bg-gray-700 text-white text-[18px] leading-[36px] font-medium rounded-[50%] border-[12px] border-white border-solid z-[4]">1</span>
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
                                    Talent Navigation
                                    </h3>
                                    <p className="pb-6 mt-0 mb-6 text-base border-b-2 border-gray-100 text-shark-700">We use our zero-friction planning diagnostic to achieve better candidate experience connection. </p>
                                    <div className="text-sm text-gray-500">
                                    <p className="mt-6"><strong>Pulse</strong> - We deploy data analytics to understand pre-hire and onboarding candidate experience better, and how to improve it.</p>
                                    <p className="mt-6"><strong>Pre-Start</strong> - Before boost off we partner with key hiring people to agree on best methods of deployment. </p>
                                    <p className="mt-6"><strong>Talent Plan</strong> - We co-pilot to design end-to end Talent Planning solutions that provide positive talent experiences.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <span className="hidden overflow-hidden left-1/2 ml-[-1px] sm:block absolute w-[2px] h-full bg-gray-300 top-0 z-[2]"></span>
                        </div>
                        <div className="relative pb-0 sm:pb-24">
                            <span className="hidden absolute top-0 left-1/2 ml-[-30px] w-[60px] h-[60px] sm:block text-center  bg-gray-700 text-white text-[18px] leading-[36px] font-medium rounded-[50%] border-[12px] border-white border-solid z-[4]">2</span>
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
                                    <p className="pb-6 mt-0 mb-6 text-base border-b-2 border-gray-100 text-shark-700">We use our 4-stage hiring methodology to find talent.</p>
                                    <div className="text-sm text-gray-500">
                                    <p className="mt-6"><strong>Attract</strong> - We use predictive job and talent demographic data for specific brand designs and marketing channels.</p>
                                    <p className="mt-6"><strong>Source</strong> - We build and implement best fit talent hiring pipelines for an efficient and friction free candidate experience.</p>
                                    <p className="mt-6"><strong>Assess and Mobilise</strong> - We provide tailored job vacancy assessments, including pre-employment HR and Safety compliance checks for risk-free guarantee.  </p>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <span className="hidden sm:block overflow-hidden left-1/2 ml-[-1px] absolute w-[2px] h-full bg-gray-300 top-0 z-[2]"></span>
                        </div>
                        
                        <div className="relative py-12 overflow-hidden bg-gray-900 border-[12px] border-white isolate sm:py-32 rounded-3xl">
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
                            <span className="hidden absolute top-0 left-1/2 ml-[-30px] w-[60px] h-[60px] sm:block text-center  bg-gray-700 text-white text-[18px] leading-[36px] font-medium rounded-[50%] border-[12px] border-white border-solid z-[4]">3</span>
                            <div className="justify-between block pt-16 sm:flex">
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
                                    <p className="pb-6 mt-0 mb-6 text-base border-b-2 border-gray-100 text-shark-700">We provide 1:1 new hire and business coaching programs for better employment retention outcomes.  </p>
                                    <div className="text-sm text-gray-500">
                                    <p className="mt-6"><strong>Onboard</strong> - Career coaching and onboarding plans for new hires and business during the first 90 and 180 days.</p>
                                    <p className="mt-6"><strong>Engage</strong> - Career Development planning 1:1 and for Teams. Employee experience pulse reviews and action planning. </p>
                                    <p className="mt-6"><strong>Offboard</strong> - Change & Transition services for business movements. Outplacement solutions that include Career planning services. Employee offboarding pulse feedback reviews.</p>
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
                <ConnectCard />
            </section>
        </div>
    )
}