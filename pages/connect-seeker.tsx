import Seo from "../components/Seo";
import { useForm } from "react-hook-form";
import axios from 'axios';

interface IFormInput {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dropDown: string;
    radioGroup: string;
  }


const jobenquriy = [
    { id: 'yes', title: 'Yes' },
    { id: 'no', title: 'No' },
  ]

export default function ConnectSeeker() {


    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();

    const onSubmit = async (data: IFormInput) => {
        try {
          const res = await axios.post('/api/seekerSend', data);
          alert(res.data.text);
        } catch (err) {
          alert('An error occurred. Please try again.');
        }
      };
    return (

        <div>
            <Seo />
            <div className="py:24 sm:py-32">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="mb-10">
                        <h1 className="text-4xl font-semibold text-malibu-300">Understanding your Employment Objectives</h1>
                        <p className="mt-4 text-base leading-8 text-shark-700">Our team will connect with you soon to undertake a pre-pulse review, to understand better your current and future employment needs.</p>
                        <p className="text-base leading-8 text-shark-700">A further pre-start meeting will be confirmed to share inital feedback, and review the best employment planning options ahead.</p>
                    </div>
                    <div className="py-12 mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8 bg-malibu-300 rounded-xl">
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                        {...register("firstName", { required: true })} placeholder="First Name"
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
                                        {...register("lastName", { required: true })} placeholder="Last Name"
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
                                        {...register("phone", { required: true, pattern: /^\d{10}$/ })} placeholder="Phone Number"
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
                                        {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} placeholder="you@yourmail.com"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-shark-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shark-900 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="location" className="block text-base font-semibold text-shark-700">
                                            Job Status
                                        </label>
                                        <select
                                            id="jobstatus"
                                            {...register("dropDown", { required: true })}
                                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-shark-700 focus:ring-2 focus:ring-shark-900 sm:text-sm sm:leading-6"
                                            defaultValue="Working"
                                        >
                                            <option>Working</option>
                                            <option>Not Working</option>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label className="block text-base font-semibold text-shark-700">Job Equriy</label>
                                        <p className="text-sm text-white">Do you have a Talentverse job enquiry?</p>
                                        <fieldset className="mt-4">
                                            <legend className="sr-only">Notification method</legend>
                                            <div className="space-y-4">
                                            {jobenquriy.map((jobenquriy) => (
                                                <div key={jobenquriy.id} className="flex items-center">
                                                <input
                                                    id={jobenquriy.id}
                                                    {...register("radioGroup", { required: true })} type="radio" value={jobenquriy.id}
                                                    defaultChecked={jobenquriy.id === 'email'}
                                                    className="w-4 h-4 text-shark-700 border-shark-700 focus:ring-shark-900"
                                                />
                                                <label htmlFor={jobenquriy.id} className="block ml-3 text-sm font-medium leading-6 text-gray-900">
                                                    {jobenquriy.title}
                                                </label>
                                                </div>
                                            ))}
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="button"
                                        className="rounded-md bg-shark-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-shark-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}