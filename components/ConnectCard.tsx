const tabs = [
    { name: 'Online', href: '#', current: false },
    { name: 'Cafe', href: '#', current: false },
    { name: 'Our Office', href: '#', current: false },
    { name: 'Your Office', href: '#', current: false },
  ]

const  ConenctCard = () => {

    return (
        <div className="py-12 mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8">
            <div className="bg-malibu-300 rounded-2xl">
                <div className="py-12 mx-10">
                    <h1 className="text-4xl font-bold text-white">Lets Connect</h1>
                    <div className="mt-10">
                        <div className="flex space-x-4" aria-label="Tabs">
                            {tabs.map((tab) => (
                                <a
                                key={tab.name}
                                href={tab.href}
                                className="px-6 py-2 font-medium text-white rounded-full bg-shark-700"
                                >
                                {tab.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 pt-10 mt-10 border-t border-gray-900/10 sm:grid-cols-3 text-shark-700">
                        <div>
                            <dt>Unit 1/32 Edward Street</dt>
                            <dd>Perth 3000 WA</dd>
                        </div>
                        <div>
                            <dt>+61 418 926 107</dt>
                            <dd>+61 418 945 072</dd>
                        </div>
                        <div>
                            <dt>enquiry@talentverse.com.au</dt>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default ConenctCard;