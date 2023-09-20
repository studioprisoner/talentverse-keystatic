
const  LogoCloud = () => {

    return (
        <div className="py-12 bg-white sm:py-16">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <h2 className="text-lg font-semibold font-bold leading-8 text-center uppercase text-malibu-300">
                Our Partners
                </h2>
                <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                <img
                    className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                    src="images/logos/AHRI.webp"
                    alt="AHRI Australia"
                    width={158}
                    height={48}
                />
                <img
                    className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                    src="images/logos/cdaa-logo.webp"
                    alt="Reform"
                    width={158}
                    height={48}
                />
                <img
                    className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                    src="images/logos/SRA-logo.webp"
                    alt="Tuple"
                    width={158}
                    height={48}
                />
                <img
                    className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
                    src="images/logos/visa-solutions.webp"
                    alt="SavvyCal"
                    width={158}
                    height={48}
                />
                </div>
            </div>
        </div>
    )
}

export default LogoCloud;