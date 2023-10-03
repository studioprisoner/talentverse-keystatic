import Seo from "../components/Seo";
import { CrewConnectForm } from '../components/crewConnect'


export default function JoinOurCrew() {
    return (
        <div>
            <Seo />
            <div className="py-12 sm:py-16">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="mb-10">
                        <h2 className="text-base font-semibold leading-7 uppercase text-malibu-300">Starting the journey</h2>
                        <h1 className="text-4xl font-bold text-shark-700">Partner Connect</h1>
                        <p className="mt-4 text-base leading-8 text-shark-500"><span className="text-malibu-300">Welcome onboard!</span> Our Talentverse community is passionate about creating sustainable employee - employer relationships. Becoming a Talentverse partner provides you with a client-boosting referral marketplace.</p>
                        <p className="text-base leading-8 text-shark-500">Joining Talentverse as a partner provides many benefits and we welcome you to connect, to find out more.</p>
                    </div>
                    <div className="max-w-2xl pb-10 mx-auto lg:max-w-none">
                        <p className="pb-4 text-base text-shark-500">We welcome you to connect.</p>
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                   Become a TV Partner
                                </dt>
                                <dd className="flex flex-col flex-auto text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Expoert</li>
                                        <li>Industry</li>
                                        <li>Education</li>
                                        <li>Café</li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                    Partner Resource Support
                                </dt>
                                <dd className="flex flex-col flex-auto text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Talentverse Academy</li>
                                        <li>Partner Network</li>
                                        <li>Referral Rewards</li>
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