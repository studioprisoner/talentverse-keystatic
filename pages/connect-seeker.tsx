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
                        <h3 className="mt-4 text-base leading-7 text-malibu-300">Welcome onboard.</h3>
                        <p className="text-base leading-8 text-shark-500">Joining Talentverse provides you a career partnership for life.</p>
                        <p className="text-base leading-8 text-shark-500">We partner with a range of industries and businesses to provide you that right job fit.</p>
                        <p className="text-base leading-8 text-shark-500">Please complete your <span className="font-bold">online request</span> and our Crew will connect with you soon.</p>
                    </div>
                    
                    <SeekerContactForm />

                    <div className="px-6 mx-auto mt-4 max-w-7xl">
                        <div className="flex flex-col">
                            <dt className="flex items-center text-2xl font-bold leading-7 text-malibu-300 gap-x-3">
                                Career Services
                            </dt>
                            <dd className="flex flex-col flex-auto mt-1 text-base leading-7 text-shark-500">
                                <ul className="list-disc list-inside">
                                    <li>Career Navigation</li>
                                    <li>Resume Services</li>
                                    <li>Referral Services</li>
                                </ul>
                            </dd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}