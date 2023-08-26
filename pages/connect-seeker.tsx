import Seo from "../components/Seo";
import { SeekerContactForm } from '../components/SeekerConnectForm'


export default function ConnectSeeker() {

    return (

        <div>
            <Seo />
            <div className="py-12 sm:py-16">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="mb-10">
                        <h1 className="text-4xl font-bold text-shark-700">Understanding your Employment Objectives</h1>
                        <p className="mt-4 text-base leading-8 text-shark-700">Our team will connect with you soon to undertake a pre-pulse review, to understand your current needs and future employment path.</p>
                        <p className="text-base leading-8 text-shark-700">A further pre-start meeting will be confirmed to share inital feedback, and review the best employment planning options ahead.</p>
                    </div>
                    <SeekerContactForm />
                </div>
            </div>
        </div>
    )
}