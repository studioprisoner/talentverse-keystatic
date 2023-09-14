const tabs = [
    { name: 'Employer', href: "/connect-employer" },
    { name: 'Job Seeker', href: "/connect-seeker" },
  ]

const  ConenctCard = () => {

    return (
        <div className="mx-auto max-w-7xl sm:py-8 bg-malibu-300 rounded-2xl">
            <div className="py-12 mx-10">
                <h1 className="text-4xl font-bold text-white">Lets Connect</h1>
                <div className="mt-10">
                    <div className="grid grid-flow-col grid-rows-4 gap-y-8 gap-x-24 sm:grid-rows-1" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <div
                            className="px-6 py-2 font-medium text-center text-white rounded-full bg-gun-powder-700"
                            >
                            {tab.name}
                            </div>
                        ))}
                    </div>
                </div>
                <dl className="grid grid-cols-1 pt-10 mt-10 border-t border-gray-900/10 sm:grid-cols-3 text-shark-900">
                    <div>
                        <dt>Unit 1/32 Edward Street</dt>
                        <dd>Perth 3000 WA</dd>
                    </div>
                    <div>
                        <dt>+61 418 926 107</dt>
                        <dd>+61 418 945 072</dd>
                    </div>
                    <div>
                        <dt>info@talentverse.com.au</dt>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default ConenctCard;