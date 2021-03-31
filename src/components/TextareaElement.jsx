import { useFormContext } from "react-hook-form";

export default function TextareaElement() {
  const { register } = useFormContext(); // retrieve all hook methods
  return (
    <textarea
      ref={register}
      rows="6"
      name="comments"
      className="border-gray-400 block py-1 px-3 w-full rounded focus:border-indigo-500 focus:ring-indigo-500"
    />
  );
}

