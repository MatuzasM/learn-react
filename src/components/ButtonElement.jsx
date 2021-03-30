
export default function ButtonElement(props) {

  return (
    <button
      type={props.type}
      className={props.className}>
      {props.label}
    </button>
  );
}
