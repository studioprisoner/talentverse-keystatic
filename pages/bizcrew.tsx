import Seo from "../components/Seo";
import Image from "next/image";

const values = [
    { label: 'Listen', value: 'We work on 80/20 listening approach.' },
    { label: 'Clarity', value: 'We partner to provide clarity to your goals.' },
    { label: 'Care', value: 'We are passionate about your outcomes.' },
  ]

export default function Bizcrew() {

    return(
        <div>
            <Seo />
            <section className="py-24 sm:py-32">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="grid items-start max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-4">
                            <div className="relative px-6 overflow-hidden bg-gray-900 shadow-2xl pt-80 sm:pt-[42rem] rounded-3xl pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <img
                                className="absolute inset-0 object-cover w-full h-full brightness-125 saturate-0"
                                src="images/office.webp"
                                alt="People working in an office"
                            />
                            <div className="absolute inset-0 bg-tv-blue mix-blend-multiply" />
                            <div
                                className="absolute -ml-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 transform-gpu blur-3xl"
                                aria-hidden="true"
                            >
                                <div
                                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#09006F] to-[#00B4ED] opacity-40"
                                style={{
                                    clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                                />
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 uppercase text-tv-blue">Our origin story</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-tv-gray sm:text-4xl">Our Journey has bought us here</h1>
                                <div className="max-w-xl">
                                    <p className="mt-6">
                                    Our founders have decades of working across different industries and businesses leading human resource functions, hiring and mobilising talent locally, nationally and globally. They have experienced the hiring and retention evaluation impact on talent demographics, from external factors and changes on how the job connection fit best works.
                                    </p>
                                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-tv-gray sm:text-2xl">Today’s employment demands</h2>
                                    <p className="mt-6">Talentverse was formed as a solution to meet the new demands employers and career seekers now seek! Talentverse is not a destination, rather an employment connection ideology and method in finding the new fiction free common place!</p>
                                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-tv-gray sm:text-2xl">The talent connection future</h2>
                                    <p className="mt-2">As the talent hiring and employment connection continues to evolve, so moving on from a higher friction and higher cost turnover reactive recruitment approach will become a model of the past.</p>
                                    <p className="mt-2">Jason & Sam, Founders - Talentverse</p>
                                </div>
                            </div>
                            <h2 className="pt-10 mt-10 font-bold uppercase text-tv-blue">Our Values</h2>
                            <dl className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                            {values.map((stat, statIdx) => (
                                <div key={statIdx}>
                                <dt className="mt-2 text-3xl font-bold leading-10 tracking-tight uppercase text-tv-gray">{stat.label}</dt>
                                <dd className="text-sm leading-6 text-gray-400">{stat.value}</dd>
                                </div>
                            ))}
                            </dl>
                            <div className="pt-10 mt-10">
                                <h2 className="font-bold uppercase text-tv-blue">Our Partners</h2>
                                <ul className="font-semibold text-tv-gray">
                                    <li>AHRI</li>
                                    <li>ADHD Australia</li>
                                    <li>Visa Solutions</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}