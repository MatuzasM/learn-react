import { useFormContext } from "react-hook-form";

export default function InputElement(props) {

  const { register } = useFormContext(); // retrieve all hook methods

  return (

    <input
      ref={register}
      type="text"
      name={props.name}
      className={props.className}
    />
  );
}
