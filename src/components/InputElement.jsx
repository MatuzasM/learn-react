
export default function InputElement(props) {

  return (
    <input
      type="text"
      name={props.name}
      className={props.className}
    />
  );
}
