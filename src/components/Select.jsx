import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Select() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    console.log(year, day, month)
  }, [year, day, month]);


  return (
    <form className="text-sm" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-base text-gray-600 font-semibold">Student Name</h1>
      <div className="flex space-x-1 mb-4">
        <div className="w-2/5 ">
          <select
            onChange={e => setMonth(e.target.value)}
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            name="Month"
            ref={register({ required: true })}
          >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
          </select>
          <label htmlFor="month">Month</label>
        </div>
        <div className="w-1/5">
          <select
            onChange={e => setDay(e.target.value)}
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            name="Days"
            ref={register({ required: true })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="31">31</option>
          </select>
          <label htmlFor="day">Day</label>
        </div>
        <div className="w-2/5">
          <select
            onChange={e => setYear(e.target.value)}
            className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
            name="Years"
            ref={register({ required: true })}
          >
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
          <label htmlFor="year">Year</label>
        </div>
      </div>
      {/*       <div className="mt-2">
        <label className="inline-flex items-center">
          <input onChange={e => setBirthDay(e.target.value)} type="checkbox" placeholder="Birth Date" name="Birth Date" ref={register} />
          <span className="ml-2">It's my birth day</span>
        </label>
      </div> */}
      <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 text-yellow-800 focus:outline-none py-2 px-4">Show Date Object</button>
    </form>
  );
}
