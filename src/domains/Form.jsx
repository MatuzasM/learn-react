import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors,);

  return (
    <form className="text-sm" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-base text-gray-600 font-semibold">Student Name</h1>
      <div className="flex space-x-1 mb-4">
        <div className="w-1/3">
          <input
            type="text"
            name="firstName"
            className="valid border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-indigo-500"
            ref={register}
          />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="w-1/3">
          <input
            type="text"
            name="middleName"
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-indigo-500"
            ref={register}
          />
          <label htmlFor="middleName">Middle Name</label>
        </div>
        <div className="w-1/3">
          <input
            type="text"
            name="lastName"
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-indigo-500"
            ref={register}
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
      </div>
      <div className="flex space-x-3 mb-4">
        <div className="w-1/2">
          <h1 className="text-base text-gray-600 font-semibold">Birth Day</h1>
          <div className="flex space-x-1">
            <div className="w-3/5">
              <select
                name="month"
                className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
                ref={register}
              >
                <option className="january" value="January">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
              </select>
              <label htmlFor="month">Month</label>
            </div>
            <div className="w-2/5">
              <select
                name="day"
                className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
                ref={register}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="2">3</option>
                <option value="31">31</option>
              </select>
              <label htmlFor="day">Day</label>
            </div>
            <div className="w-2/5">
              <select
                name="year"
                className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
                ref={register}
              >
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
              <label htmlFor="year">Year</label>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="text-base font-semibold">Gender</h1>
          <select
            name="gender"
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            ref={register}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-base text-gray-600 font-semibold">Address</h1>
        <input
          type="text"
          name="addressLine"
          className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
          ref={register}
        />
        <label htmlFor="streetAddress">Street Address</label>
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="addressLineTwo"
          className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
          ref={register}
        />
        <label htmlFor="streetAddressLine">Street address line 2</label>
      </div>
      <div className="flex space-x-3 mb-4">
        <div className="w-1/2">
          <select
            name="city"
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            ref={register}
          >
            <option value="City1">City1</option>
            <option value="City2">City2</option>
            <option value="City3">City3</option>
            <option value="City3">City4</option>
          </select>
          <label htmlFor="city">City</label>
        </div>
        <div className="w-1/2">
          <select
            name="state"
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            ref={register}
          >
            <option value="Texas">Texas</option>
            <option value="California">California</option>
            <option value="Nevada">Nevada</option>
          </select>
          <label htmlFor="state">State / Province</label>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="zipCode"
          className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
          ref={register}
        />
        <label htmlFor="zipCode">Postal / Zip Code</label>
      </div>
      <div className="flex space-x-3 mb-4">
        <div className="w-1/2">
          <label className="text-base text-gray-600 font-semibold" htmlFor="email">Student E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            ref={register}
          />
          <p> example@example.com</p>
        </div>
        <div className="w-1/2">
          <label className="text-base text-gray-600 font-semibold" htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            id="number"
            name="mobileNumber"
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            ref={register}
          />
          <p>+370 600 00000</p>
        </div>
      </div>
      <div className="flex space-x-3 mb-4">
        <div className="w-1/2">
          <label className="text-base text-gray-600 text-base font-semibold" htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="number"
            name="phoneNumber"
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            ref={register}
          />
          <p>+37060000000</p>
        </div>
        <div className="w-1/2">
          <label className="text-base text-gray-600 font-semibold" htmlFor="work">Work Number</label>
          <input
            type="text"
            id="number"
            name="workNumber"
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            ref={register}
          />
          <p>37060000000</p>
        </div>
      </div>
      <div className="mb-4">
        <label className="text-base text-gray-600 font-semibold" htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          className="border-gray-400 block py-1 px-3 w-1/2 rounded focus:border-indigo-500 focus:ring-indigo-500"
          ref={register}
        />
      </div>
      <div className="mb-4">
        <label className="text-base text-gray-600 font-semibold" htmlFor="courses">Courses</label>
        <select
          name="courses"
          className="border-gray-400 block py-1 px-3 w-1/2 rounded focus:border-indigo-500 focus:ring-indigo-500"
          ref={register}
        >
          <option value="">Php</option>
          <option value="">React</option>
          <option value="">Nestjs</option>
          <option value="">Tailwindcss</option>
        </select>
      </div>
      <div className="">
        <label className="text-base text-gray-600 font-semibold" htmlFor="comments">Additional Comments</label>
        <textarea
          rows="6"
          name="comment"
          className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
          ref={register}
        />
      </div>
      <hr className="mt-3 border-gray-200" />
      <div className="mt-8">
        <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 text-yellow-800 focus:outline-none py-2 px-4">Submit Application</button>
        <button type="reset" className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 text-yellow-800 focus:outline-none py-2 px-4 float-right">Clear Fields</button>
      </div>
    </form >
  );
}
