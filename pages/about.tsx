import Seo from "../components/Seo";
import ConnectCard from "../components/ConnectCard";
import LogoCloud from "../components/LogoCloud";

const values = [
  { label: 'We Listen', value: 'We work on a 80/20 listening approach.' },
  { label: 'We Clarify', value: 'We partner to provide clarity to your goals.' },
  { label: 'We Care', value: 'We are passionate about your outcomes.' },
]


export default function About(){
  return(
    <div>
        <Seo />
        <section className="py-12 sm:py-16">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="grid items-start max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-4">
                        <div className="relative px-6 overflow-hidden bg-gray-900 shadow-2xl pt-80 sm:pt-[42rem] rounded-3xl pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                        <img
                            className="absolute inset-0 object-cover w-full h-full brightness-125 saturate-0"
                            src="images/office.webp"
                            alt="People working in an office"
                        />
                        <div className="absolute inset-0 bg-malibu-300 mix-blend-multiply" />
                        <figure className="relative isolate">
                          <blockquote className="mt-6 text-3xl font-semibold leading-8 text-white">
                            <p>
                            “Creating a friction-free candidate experience is the frontier of effective employee sourcing and retention.”
                            </p>
                          </blockquote>
                        </figure>                     
                        </div>
                    </div>
                    <div>
                        <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p className="text-4xl font-bold tracking-tight lg:text-6xl text-shark-700">Our story</p>
                            <div className="max-w-xl">
                                <p className="mt-6">We are workforce strategy specialists with experience leading teams in mobilising talent locally, nationally, and globally. We co-partner with a range of industries and businesses to deliver on talent hiring and retention needs. We love what we do, and that drives our passion for navigating friction-free business and talent connections.</p>
                                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-shark-700 sm:text-4xl">Approach</h2>
                                <p className="mt-2">We bring a proactive, data-driven approach to hiring and onboarding new talent. Through our pulse diagnostic survey.</p>
                                <p className="mt-2">We identify early any pre-hire and onboarding risks. This feedback helps us co-create a tailored workforce plan that focuses on the talent investment.</p>
                                <p>To support implementation, we provide hiring teams change ready mentoring and support through our integrated service platforms.</p>
                                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-shark-700 sm:text-4xl">Mission</h2>
                                <p className="text-base italic text-malibu-300">Navigating friction-free employment experiences.</p>
                                <p className="mt-2">The talent hiring market and candidate demand is increasingly evolving away from one-fits-all recruitment approaches, away from one-fit- all recruitment approaches, towards a more fluid and friction-free employment experience.</p>
                                <p className="mt-2">We look forward to connecting with you!</p>
                                <p className="mt-2">Crew Team Partners</p>
                            </div>
                        </div>
                        <h2 className="pt-10 mt-10 font-bold uppercase text-malibu-300">Our Values</h2>
                        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        {values.map((stat, statIdx) => (
                            <div key={statIdx}>
                            <dt className="mt-2 text-xl font-bold leading-10 tracking-tight uppercase sm:text-3xl text-shark-700">{stat.label}</dt>
                            <dd className="text-sm leading-6 text-gray-400">{stat.value}</dd>
                            </div>
                        ))}
                        </dl>
                    </div>
                </div>
                
            </div>
        </section>
        <section className="px-6">
          <ConnectCard />
        </section>
    </div>
)
}
