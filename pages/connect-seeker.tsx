import Seo from "../components/Seo";
import { SeekerContactForm } from '../components/SeekerConnectForm'


export default function ConnectSeeker() {

    return (

        <div>
            <Seo />
            <div className="py-12 sm:py-16">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="mb-10">
                        <h2 className="text-base font-semibold leading-7 uppercase text-malibu-300">Going on the journey with you</h2>
                        <h1 className="text-4xl font-bold text-shark-700">Job Seeker Connect</h1>
                        <p className="mt-4 text-base leading-8 text-shark-500">Talentverse provides a friction-free experience for job seekers. We care about you and joining Talentverse provides you a career partner for life.</p>
                        <p className="text-base leading-8 text-shark-500">We support a range of industries and companies to help you find that right job fit for you.</p>
                        <p className="text-base leading-8 text-shark-500">We offer a range of job seeker services to navigate you through the journey.</p>
                    </div>
                    <div className="max-w-2xl pb-10 mx-auto lg:max-w-none">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="flex items-center text-base font-semibold leading-7 text-malibu-300 gap-x-3">
                                   My Talentverse
                                </dt>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Submit your resume</li>
                                        <li>Timesheet Portal</li>
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
                                        <li>Career navigate</li>
                                        <li>Resmue</li>
                                        <li>Career connect</li>
                                    </ul>
                                </dd>
                            </div>
                        </div>
                    </div>
                    <SeekerContactForm />
                </div>
            </div>
        </div>
    )
}