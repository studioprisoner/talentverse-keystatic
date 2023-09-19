const tabs = [
    { name: 'Employer', href: "/connect-employer" },
    { name: 'Job Seeker', href: "/connect-seeker" },
  ]

const  ConenctCard = () => {

    return (
        <div className="mx-auto max-w-7xl sm:py-8 bg-malibu-300 rounded-2xl">
            <div className="py-12 mx-10">
                <h1 className="text-4xl font-bold text-white">Lets Connect</h1>
                <span className="pr-5 font-bold uppercase text-shark-700">Cafe</span><span className="pr-5 font-bold uppercase text-shark-700">Online</span><span className="pr-5 font-bold uppercase text-shark-700">Office</span>
                <div className="mt-10">
                    <div className="grid grid-flow-col grid-rows-4 gap-y-8 gap-x-24 sm:grid-rows-1" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <a href={tab.href} key={tab.name} className="flex items-center justify-center px-6 py-4 text-lg font-medium text-white uppercase rounded-full bg-gun-powder-700">
                                {tab.name}
                            </a>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ConenctCard;