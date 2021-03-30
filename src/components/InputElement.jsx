import { useFormContext } from "react-hook-form";

function InputElement(props) {

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

export default InputElement;