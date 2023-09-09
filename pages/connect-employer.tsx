import Seo from "../components/Seo";
import { EmployerContactForm } from '../components/EmployerConnectForm'


export default function ConnectEmployer() {

    return (

        <div>
            <Seo />
            <div className="py-12 sm:py-16">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="mb-10">
                        <h2 className="text-base font-semibold leading-7 uppercase text-malibu-300">Going on the journey with you</h2>
                        <h1 className="text-4xl font-bold text-shark-700">Employer Connect</h1>
                        <p className="mt-4 text-base leading-8 text-shark-500">Before take-off let us understand your end goals better.  </p>
                        <p className="text-base leading-8 text-shark-500">Our crew will connect with you soon to undertake a <span className="font-bold">pre-pulse</span> review, to understand your current and future workforce needs.</p>
                        <p className="text-base leading-8 text-shark-500">A further <span className="font-bold">pre-start</span> meeting will be confirmed to share initial feedback, and to implement the best workforce action plan.</p>
                    </div>
                    <div className="max-w-2xl pb-10 mx-auto lg:max-w-none">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                    New Vaccancy
                                </dt>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Our Approach</li>
                                        <li>Industy Experience</li>
                                        <li>Frequency Asked Questions</li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                    Our Services
                                </dt>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Talent navigate</li>
                                        <li>Talent employ</li>
                                        <li>Talent connect</li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                    Client Information
                                </dt>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Privacy Policies</li>
                                        <li>Terms of business</li>
                                        <li>Insurance cover</li>
                                        <li>Work Health &amp; Safety</li>
                                        <li>Human Resources support</li>
                                    </ul>
                                </dd>
                            </div>
                        </div>
                    </div>
                    <EmployerContactForm />
                </div>
            </div>
        </div>
    )
}