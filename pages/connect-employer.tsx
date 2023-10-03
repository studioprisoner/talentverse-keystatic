import Link from 'next/link'
import Seo from "../components/Seo";
import { EmployerContactForm } from '../components/EmployerConnectForm'


export default function ConnectEmployer() {

    return (

        <div>
            <Seo />
            <div className="py-12 sm:py-16">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="mb-10">
                        <h2 className="text-base font-semibold leading-7 uppercase text-malibu-300">Starting the journey</h2>
                        <h1 className="text-4xl font-bold text-shark-700">Employer Connect</h1>
                        <p className="mt-4 text-base leading-8 text-shark-500"><span className='text-malibu-300'>Welcome onboard!</span> We look forward to co-piloting with you to <span className='text-malibu-300'>navigate, employ</span> and <span className='text-malibu-300'>connect</span> on your next workforce project. To understand your requirements better please complete our online enquiry form.</p>
                        <p className="text-base leading-8 text-shark-500">Need advice on that next hire? - We welcome you to connect.</p>
                    </div>
                    <EmployerContactForm />
                    
                    <div id="#industry" className="grid grid-cols-1 py-12 sm:py-16 sm:grid-cols-2 gap-x-8">
                        <div className="px-6 mx-auto max-w-7xl">
                            <div className="flex flex-col">
                                <dt className="flex items-center pb-2 text-2xl font-bold leading-7 text-malibu-300 gap-x-3">
                                    Industry Experience
                                </dt>
                                <dd className="text-shark-700">We support clients across various industry sectors that include:</dd>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Automotive</li>
                                        <li>Business Support</li>
                                        <li>Construction &amp; Maintenance</li>
                                        <li>Engineering &amp; Technical</li>
                                        <li>Mining &amp; Resources</li>
                                        <li>Transport &amp; Logistics</li>
                                        <li>Warehousing &amp; Supply Chain</li>
                                    </ul>
                                </dd>
                            </div>
                        </div>
                        <div className="px-6 mx-auto max-w-7xl">
                            <div className="flex flex-col">
                                <dt className="flex items-center pb-2 text-2xl font-bold leading-7 text-malibu-300 gap-x-3">
                                Client Information
                                </dt>
                                <dd className="text-shark-700">We provide client information on request</dd>
                                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-shark-500">
                                    <ul className="list-disc list-inside">
                                        <li>Privacy Policy</li>
                                        <li>Terms of Business</li>
                                        <li>Insurances Cover</li>
                                        <li>Work Health &amp; Safety</li>
                                        <li>Human Resources &amp; Payroll Support</li>
                                    </ul>
                                </dd>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}