
const  LogoCloud = () => {

    return (
        <div className="py-12 bg-white sm:py-16">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <h2 className="text-lg font-semibold leading-8 text-center text-gray-700">
                Our Partners
                </h2>
                <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img
                    className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                    src="images/logos/AHRI.webp"
                    alt="AHRI Australia"
                    width={158}
                    height={48}
                />
                <img
                    className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                    src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                    alt="Reform"
                    width={158}
                    height={48}
                />
                <img
                    className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                    src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
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
                <img
                    className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
                    src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                    alt="Statamic"
                    width={158}
                    height={48}
                />
                </div>
            </div>
        </div>
    )
}

export default LogoCloud;