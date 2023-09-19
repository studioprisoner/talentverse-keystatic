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
                        <p className="mt-4 text-base leading-8 text-shark-500">Our service philosophy is about connecting the talent community back in a more positive way.</p>
                        <p className="text-base leading-8 text-shark-500">Joining Talentverse as a partner provides many benefits and we welcome you to connect, to find out more.</p>
                    </div>
                    <div className="max-w-2xl pb-10 mx-auto lg:max-w-none">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                   Our Community Opportunities
                                </dt>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Enquire Talentverse jobs</li>
                                        <li>Training Academy</li>
                                        <li>Pilot Partner Program</li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                    Become a Co-Partner
                                </dt>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Industry Association</li>
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