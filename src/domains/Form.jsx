import { useForm, FormProvider } from "react-hook-form";
import ButtonElement from '../components/ButtonElement';
import InputElement from '../components/InputElement';
import SelectElement from '../components/SelectElement';
import TextareaElement from '../components/TextareaElement';

export default function App() {
  const methods = useForm();
  const { register, handleSubmit, errors } = methods;
  // display form object
  const onSubmit = data => console.log(data);

  // const getSelectedValue = e => console.log(e.target.value);

  return (
    <FormProvider {...methods}>
      <form className="text-sm" onSubmit={handleSubmit(onSubmit)} >
        <h1 className="text-base font-semibold">Student Name</h1>
        <div className="flex space-x-1 mb-4">
          <div className="w-1/3">
            <input
              className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-indigo-500"
              ref={register}
              name="firstName"
              id="firstName"
              type="text"
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="w-1/3">
            <InputElement
              className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-indigo-500"
              type="text"
              name="middleName" />
            <label htmlFor="middleName">Middle Name</label>
          </div>
          <div className="w-1/3">
            <InputElement
              className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-indigo-500"
              name="lastName" />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="flex space-x-3 mb-4">
          <div className="w-1/2">
            <h1 className="text-base font-semibold">Birth Day</h1>
            <div className="flex space-x-1">
              <div className="w-3/5">
                <SelectElement
                  className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
                  name="month" />
                <label htmlFor="month">Month</label>
              </div>
              <div className="w-2/5">
                <SelectElement
                  className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
                  name="day" />
                <label htmlFor="day">Day</label>
              </div>
              <div className="w-2/5">
                <SelectElement
                  className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
                  name="year" />
                <label htmlFor="year">Year</label>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-base font-semibold">Gender</h1>
            <SelectElement
              className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
              name="gender" />
          </div>
        </div>
        <div className="mb-4">
          <h1 className="text-base text-gray-600 font-semibold">Address</h1>
          <InputElement
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            name="addressLine" />
          <label htmlFor="streetAddress">Street Address</label>
        </div>
        <div className="mb-4">
          <InputElement
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            name="addressLineTwo" />
          <label htmlFor="streetAddressLine">Street address line 2</label>
        </div>
        <div className="flex space-x-3 mb-4">
          <div className="w-1/2">
            <SelectElement
              className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
              name="city" />
            <label htmlFor="city">City</label>
          </div>
          <div className="w-1/2">
            <SelectElement
              className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
              name="state" />
            <label htmlFor="state">State / Province</label>
          </div>
        </div>
        <div className="mb-4">
          <InputElement
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            name="zipCode" />
          <label htmlFor="zipCode">Postal / Zip Code</label>
        </div>
        <div className="flex space-x-3 mb-4">
          <div className="w-1/2">
            <label className="text-base font-semibold" htmlFor="email">Student E-mail*</label>
            <InputElement
              className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
              name="email"
              id="email" />
            <p> example@example.com</p>
          </div>
          <div className="w-1/2">
            <label className="text-base font-semibold" htmlFor="mobile">Mobile Number*</label>
            <InputElement
              className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
              name="mobileNumber"
              id="mobileNumber" />
            <p>+370 600 00000</p>
          </div>
        </div>
        <div className="flex space-x-3 mb-4">
          <div className="w-1/2">
            <label className="text-base font-semibold" htmlFor="phone">Phone Number</label>
            <InputElement
              className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
              name="phoneNumber"
              id="phoneNumber" />
            <p>+37060000000</p>
          </div>
          <div className="w-1/2">
            <label className="text-base font-semibold" htmlFor="work">Work Number</label>
            <InputElement
              className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
              name="workNumber"
              id="workNumber" />
            <p>37060000000</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-base text-gray-600 font-semibold" htmlFor="company">Company</label>
          <InputElement
            className="border-gray-400 block py-1 px-3 w-1/2 rounded focus:border-indigo-500 focus:ring-indigo-500"
            name="company"
          />
        </div>
        <div className="mb-4">
          <label className="text-base text-gray-600 font-semibold" htmlFor="courses">Courses</label>
          <SelectElement
            className="border-gray-400 block py-1 px-3 w-1/2 rounded focus:border-indigo-500 focus:ring-indigo-500"
            name="courses" />
        </div>
        <div className="">
          <label className="text-base text-gray-600 font-semibold" htmlFor="comments">Additional Comments</label>
          <TextareaElement
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            rows="6"
            name="comment" />
        </div>
        <hr className="mt-3 border-gray-200" />
        <div className="mt-8">
          <ButtonElement
            name="submit"
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 text-yellow-800 focus:outline-none py-2 px-4"
            label="Submit Application" />
          <ButtonElement
            name="reset"
            type="reset"
            className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 text-yellow-800 focus:outline-none py-2 px-4 float-right"
            label="Clear Fields" />
        </div >
      </form >
    </FormProvider>
  );
}
