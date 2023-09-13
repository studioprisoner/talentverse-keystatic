import Seo from "../components/Seo";
import { CrewConnectForm } from '../components/crewConnect'


export default function JoinOurCrew() {
    return (
        <div>
            <Seo />
            <div className="py-12 sm:py-16">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="mb-10">
                        <h2 className="text-base font-semibold leading-7 uppercase text-malibu-300">Going on the jouney with us</h2>
                        <h1 className="text-4xl font-bold text-shark-700">Join our Crew</h1>
                        <p className="mt-4 text-base leading-8 text-shark-500">At Talentverse our mission is to navigate positive employment outcomes for our clients.</p>
                        <p className="text-base leading-8 text-shark-500">Our service philosophy is about delivering a friction-free employment connection between employers and employees.</p>
                        <p className="text-base leading-8 text-shark-500">Joining our crew and being part of the Talentverse community offers you many benefits.</p>
                    </div>
                    <div className="max-w-2xl pb-10 mx-auto lg:max-w-none">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                   Join Our Crew
                                </dt>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>TV Crew Jobs</li>
                                        <li>Our Training Academy</li>
                                        <li>Book a Coffee</li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                    Become a Partner
                                </dt>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Inustry Association</li>
                                        <li>Learning Institution</li>
                                        <li>Cafe</li>
                                        <li>Expert</li>
                                    </ul>
                                </dd>
                            </div>
                        </div>
                    </div>
                    <CrewConnectForm />
                </div>
            </div>
        </div>
    )
}