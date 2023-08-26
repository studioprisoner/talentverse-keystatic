import Seo from "../components/Seo";
import { EmployerContactForm } from '../components/EmployerConnectForm'


export default function ConnectEmployer() {

    return (

        <div>
            <Seo />
            <div className="py-12 sm:py-16">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="mb-10">
                        <h1 className="text-4xl font-bold text-shark-700">Understanding your Employment Objectives</h1>
                        <p className="mt-4 text-base leading-8 text-shark-700">Before take off let us get to know your objectives better.</p>
                        <p className="text-base leading-8 text-shark-700">Our team will connect with you soon to undertake a pre-pulse review, to undertsand better your current and future workforce needs.</p>
                        <p className="text-base leading-8 text-shark-700">A further pre-start meeting will be confirmed to share inital feedback, and review the best workforce planning options ahead.</p>
                    </div>
                    <EmployerContactForm />
                </div>
            </div>
        </div>
    )
}