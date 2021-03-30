import { useFormContext } from "react-hook-form";

export default function TextareaElement(props) {
  const { register } = useFormContext(); // retrieve all hook methods
  return (
    <textarea
      ref={register}
      rows={props.rows}
      name={props.name}
      className={props.className}
    />
  );
}

