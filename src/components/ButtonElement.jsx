import { useFormContext } from "react-hook-form";

function ButtonElement(props) {
  const { register } = useFormContext(); // retrieve all hook methods
  return (
    <button
      ref={register}
      type={props.type}
      name={props.name}
      className={props.className}
    >
      {props.label}
    </button>
  );
}


export default ButtonElement;