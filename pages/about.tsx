import Seo from "../components/Seo";
import ConnectCard from "../components/ConnectCard";
import LogoCloud from "../components/LogoCloud";

const values = [
  { label: 'We Listen', value: 'We work on 80/20 listening approach.' },
  { label: 'We Clarify', value: 'We partner to provide clarity to your goals.' },
  { label: 'We Care', value: 'We are passionate about your outcomes.' },
]


export default function About(){
  return(
    <div>
        <Seo />
        <section className="py-24 sm:py-32">
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
                            “Navigating friction-free connection is the frontier of talent hiring and retention.”
                            </p>
                          </blockquote>
                        </figure>                     
                        </div>
                    </div>
                    <div>
                        <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p className="text-4xl font-bold tracking-tight lg:text-6xl text-shark-700">Our story</p>
                            <div className="max-w-xl">
                                <p className="mt-6">We are specialists at human resource strategy and leading teams in mobilising talent locally, nationally, and globally. We co-partner with range of industry and businesses to deliver on their talent hiring and retention needs. We love what we do, and that drives our passion for navigating friction-free business and talent connections.</p>
                                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-shark-700 sm:text-4xl">Approach</h2>
                                <p className="mt-2">We bring a proactive data-driven approach to the hiring, and onboarding new talent. Through our <span className="text-malibu-300">pulse diagnostic</span>, we identify early any pre-hire and onboarding fiction risk. This feedback helps us co-create a tailored <span className="text-malibu-300">workforce plan</span> that focuses on your greatest opportunity for commercial success - your talent.</p>
                                <p>To support your implementation, we provide hiring team <span className="font-semibold">change ready</span> coaching and support through our <span className="font-semibold">integrated service platforms.</span></p>
                                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-shark-700 sm:text-4xl">Mission</h2>
                                <p className="text-base italic text-malibu-300">To navigate positive employment connection experiences.</p>
                                <p className="mt-2">The talent demographic and hiring market is increasingly evolving and moving away from traditional and reactive recruitment approaches towards a more agile, predictive and friction-free connected approach.</p>
                                <p className="mt-2">We look forward to connecting with you. </p>
                                <p className="mt-2"><span className="font-semibold text-malibu-300">Jay & Sam</span> - Founding Crew</p>
                            </div>
                        </div>
                        <h2 className="pt-10 mt-10 font-bold uppercase text-malibu-300">Our Values</h2>
                        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        {values.map((stat, statIdx) => (
                            <div key={statIdx}>
                            <dt className="mt-2 text-3xl font-bold leading-10 tracking-tight uppercase text-shark-700">{stat.label}</dt>
                            <dd className="text-sm leading-6 text-gray-400">{stat.value}</dd>
                            </div>
                        ))}
                        </dl>
                    </div>
                </div>
                <LogoCloud />
            </div>
        </section>
        <section>
          <ConnectCard />
        </section>
    </div>
)
}
