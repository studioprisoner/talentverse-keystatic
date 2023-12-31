import Link from 'next/link';
import React, { FormEvent, useState } from "react";


export const EmployerContactForm = () => {

    const [isSubmitted, setSubmitted] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [position, setPosistion] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [industry, setIndustry] = useState("");
    const [vacancydetails, setVacacydetails] = useState("");
    const [talentAdvice, setAdvice] = useState("");
    const [positionStatus, setPositionStatus] = useState("");
    const [totalEmployees, setTotalEmployees] = useState("");
    const [meetingPreference, setMeeting] = useState("");

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
    
        try {
          const res = await fetch('/api/employerSend', {
            method: 'POST',
            body: JSON.stringify({
              firstName,
              position,
              company,
              phone,
              email,
              industry,
              vacancydetails,
              talentAdvice,
              positionStatus,
              totalEmployees,
              meetingPreference
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

        <div className="py-6 mx-auto max-w-7xl sm:px-6 sm:py-8 lg:px-8 bg-malibu-300 rounded-xl">
            <p className="text-lg font-semibold leading-6 text-white">Thanks for submitting your details, we'll be in touch.</p>
        </div>

    ): (

    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8 bg-malibu-300 rounded-xl">
        <form onSubmit={onSubmit}>
            <h2 className="text-2xl font-bold text-white uppercase">Talent Enquiry</h2>
            <div className="space-y-12">
                
                <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-base font-semibold text-shark-700">
                        Name
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
                    <div className="sm:col-span-2">
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
                       Work Email
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
                    

                    <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-base font-semibold text-shark-700">
                        Company Name
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-shark-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shark-900 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-4" onChange={(e) => setTotalEmployees(e.target.value)}>
                    <label htmlFor="email" className="block text-base font-semibold text-shark-700">
                        Number of employees
                    </label>
                        <div className="relative flex items-start">
                        <div className="flex items-center h-6">
                            <input
                            id="1-10"
                            aria-describedby="1-10"
                            name="1-10"
                            value="1-10"
                            type="checkbox"
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                            1-10
                            </label>
                        </div>
                        </div>
                        <div className="relative flex items-start">
                        <div className="flex items-center h-6">
                            <input
                            id="11-50"
                            aria-describedby="11-50"
                            name="11-50"
                            value="11-50"
                            type="checkbox"
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                            11-50
                            </label>
                        </div>
                        </div>
                        <div className="relative flex items-start">
                        <div className="flex items-center h-6">
                            <input
                            id="51-100"
                            aria-describedby="51-100"
                            name="51-50"
                            value="51-50"
                            type="checkbox"
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                            51-100
                            </label>
                        </div>
                        </div>
                        <div className="relative flex items-start">
                        <div className="flex items-center h-6">
                            <input
                            id="101-500"
                            aria-describedby="101-500"
                            name="101-500"
                            value="101-500"
                            type="checkbox"
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                            101-500
                            </label>
                        </div>
                        </div>
                        <div className="relative flex items-start">
                        <div className="flex items-center h-6">
                            <input
                            id="500+"
                            aria-describedby="500+"
                            name="500+"
                            value="500+"
                            type="checkbox"
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                            500+
                            </label>
                        </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                    <label htmlFor="postion" className="block text-base font-semibold text-shark-700">
                        Your Position
                    </label>
                    <div className="mt-2">
                        <input
                        type="position"
                        id="position"
                        value={position}
                        onChange={(e) => setPosistion(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-shark-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shark-900 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label className="block text-base font-semibold text-shark-700">Hiring Request - <span className='text-sm text-white hover:text-shark-900'><Link href="/catchzone">See Catchzone services</Link></span></label>
                        <fieldset className="mt-4">
                            <legend className="sr-only">Hiring Request</legend>
                            <div className="space-y-4" onChange={(e) => setPositionStatus(e.target.value)}>
                                <div key="permanent" className="flex items-center">
                                    <input
                                        id="permanent"
                                        type= "radio"
                                        value="Permanent Hire"
                                        name='postionStatus'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        Permanent Hire
                                    </label>
                                </div>
                                <div key="flexible" className="flex items-center">
                                    <input
                                        id="flexible"
                                        type= "radio"
                                        value="Flexible Hire"
                                        name='postionStatus'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        Flexible Hire
                                    </label>
                                </div>
                                <div key="rpo" className="flex items-center">
                                    <input
                                        id="rpo"
                                        type= "radio"
                                        value="rpo"
                                        name='postionStatus'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        Recruitment Process Outsourcing (RPO)
                                    </label>
                                </div>
                                <div key="expert" className="flex items-center">
                                    <input
                                        id="expert"
                                        type= "radio"
                                        value="expert"
                                        name='postionStatus'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                       Expert Hire
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <div className="sm:col-span-4">
                        <label className="block text-base font-semibold text-shark-700">Talent Advice - <span className='text-sm text-white hover:text-shark-900'><Link href="/coffee-career">See Coffee &amp; Careers</Link></span></label>
                        <fieldset className="mt-4">
                            <legend className="sr-only">Talent Advice</legend>
                            <div className="space-y-4" onChange={(e) => setAdvice(e.target.value)}>
                                <div key="onboarding" className="flex items-center">
                                    <input
                                        id="onboarding"
                                        type= "radio"
                                        value="onboarding"
                                        name='talentAdvice'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        Onboarding
                                    </label>
                                </div>
                                <div key="engagement" className="flex items-center">
                                    <input
                                        id="engagement"
                                        type= "radio"
                                        value="engagement"
                                        name='talentAdvice'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        Engagement
                                    </label>
                                </div>
                                <div key="offboarding" className="flex items-center">
                                    <input
                                        id="offboarding"
                                        type= "radio"
                                        value="offboarding"
                                        name='talentAdvice'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        Offboarding
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>


                    <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-base font-semibold text-shark-700">
                        Your Industry
                    </label>
                    <div className="mt-2">
                        <input
                        type="industry"
                        id="industry"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-shark-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shark-900 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-base font-semibold text-shark-700">
                    Request Details
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="vaccanydetails"
                            value={vacancydetails}
                            rows={3}
                            onChange={(e) => setVacacydetails(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-shark-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shark-900 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label className="block text-base font-semibold text-shark-700">Meeting Preference</label>
                        <fieldset className="mt-4">
                            <legend className="sr-only">Meeting Prefernce</legend>
                            <div className="space-y-4" onChange={(e) => setMeeting(e.target.value)}>
                                <div key="cafe" className="flex items-center">
                                    <input
                                        id="cafe"
                                        type= "radio"
                                        value="cafe"
                                        name='meetingPrefernce'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        Cafe
                                    </label>
                                </div>
                                <div key="online" className="flex items-center">
                                    <input
                                        id="flexionlineble"
                                        type= "radio"
                                        value="online"
                                        name='meetingPrefernce'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        Online
                                    </label>
                                </div>
                                <div key="office" className="flex items-center">
                                    <input
                                        id="office"
                                        type= "radio"
                                        value="office"
                                        name='meetingPrefernce'
                                        className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                    />
                                    <label htmlFor="yes" className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                        Office
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