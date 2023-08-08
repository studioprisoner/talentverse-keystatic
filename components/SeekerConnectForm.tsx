import React, { FormEvent, useState } from "react";

export const SeekerContactForm = () => {

    const [isSubmitted, setSubmitted] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [jobStatus, setjobSatus] = useState("");
    const [radioGroup, setRadioGroup] = useState("Yes");

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
    
        try {
          const res = await fetch('/api/seekerSend', {
            method: 'POST',
            body: JSON.stringify({
              firstName,
              lastName,
              phone,
              email,
              jobStatus,
              radioGroup
            }),
            headers: {
              'content-type': 'application/json',
            },
          })
          if (res.status === 200) {
            setSubmitted(true)
          }
        } catch (err: any) {
          console.error('Err', err)
        }
      }

    return isSubmitted ? (

        <div className="py-12 mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8 bg-malibu-300 rounded-xl">
            <p className="text-lg font-semibold leading-6 text-white">Thanks for submitting your details, we'll be in touch.</p>
        </div>

    ): (

    <div className="py-12 mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8 bg-malibu-300 rounded-xl">
        <form onSubmit={onSubmit}>
            <div className="space-y-12">
                <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-base font-semibold text-shark-700">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        id="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-shark-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shark-900 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-base font-semibold text-shark-700">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        id="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-shark-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shark-900 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-4">
                    <label htmlFor="phone-number" className="block text-base font-semibold text-shark-700">
                        Phone Number
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                        <label htmlFor="country" className="sr-only">
                            Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            autoComplete="country"
                            className="h-full py-0 pl-3 text-gray-500 bg-transparent border-0 rounded-md pr-7 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-shark-900 sm:text-sm"
                        >
                            <option>AU</option>
                        </select>
                        </div>
                        <input
                        type="text"
                        id="phone-number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-shark-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shark-900 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-base font-semibold text-shark-700">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-shark-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shark-900 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label className="block text-base font-semibold text-shark-700">Job Status</label>
                        <fieldset className="mt-4">
                            <legend className="sr-only">Job Status</legend>
                            <div className="space-y-4" onChange={(e) => setjobSatus(e.target.value)}>
                                <div key="employed" className="flex items-center">
                                    <input
                                        id="employed"
                                        type= "radio"
                                        value="Employed"
                                        name='jobStatus'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        Employed
                                    </label>
                                </div>
                                <div key="unemployed" className="flex items-center">
                                    <input
                                        id="unemployed"
                                        type= "radio"
                                        value="Not Working"
                                        name='jobStatus'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        Not Working
                                    </label>
                                </div>
                            </div>
                            
                        </fieldset>
                    </div>
                    <div className="sm:col-span-4">
                        <label className="block text-base font-semibold text-shark-700">Job Equriy</label>
                        <p className="text-sm text-white">Do you have a Talentverse job enquiry?</p>
                        <fieldset className="mt-4">
                            <legend className="sr-only">Job Status</legend>
                            <div className="space-y-4" onChange={(e) => setRadioGroup(e.target.value)}>
                                <div key="yes" className="flex items-center">
                                    <input
                                        id="yes"
                                        type= "radio"
                                        value="Yes"
                                        name='jobEnquiry'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        Yes
                                    </label>
                                </div>
                                <div key="no" className="flex items-center">
                                    <input
                                        id="no"
                                        type= "radio"
                                        value="No"
                                        name='jobEnquiry'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        No
                                    </label>
                                </div>
                            </div>
                            
                        </fieldset>
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="rounded-md bg-shark-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-shark-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
    )
}