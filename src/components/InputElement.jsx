import { useFormContext } from "react-hook-form";

export default function InputElement(props) {

  const { register } = useFormContext(); // retrieve all hook methods

  return (

    <input
      ref={register}
      type="text"
      name={props.name}
      className={`border-gray-400 block py-1 ${props.className} px-3 rounded focus:border-indigo-500 focus:ring-indigo-500 `}
    />
  );
}
