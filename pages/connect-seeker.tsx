import Seo from "../components/Seo";
import { SeekerContactForm } from '../components/SeekerConnectForm'


export default function ConnectSeeker() {

    return (

        <div>
            <Seo />
            <div className="py-12 sm:py-16">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="mb-10">
                        <h2 className="text-base font-semibold leading-7 uppercase text-malibu-300">Starting the Journey</h2>
                        <h1 className="text-4xl font-bold text-shark-700">Job Seeker Connect</h1>
                        <p className="text-base leading-8 text-shark-500"><span className="text-malibu-300">Welcome onboard!</span> Joining the Talentverse community provides you a career navigation partner.</p>
                        <p className="text-base leading-8 text-shark-500">The Talentverse marketplace connects you with a range of industries, companies and career experts to support you along your working journey.</p>
                        <p className="text-base leading-8 text-shark-500">Need advice on that next job? – We welcome you to connect.</p>
                    </div>
                    <SeekerContactForm />
                </div>
            </div>
        </div>
    )
}