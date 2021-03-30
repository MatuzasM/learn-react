
export default function ButtonElement(props) {
  return (
    <button
      type={props.type}
      name={props.name}
      className={props.className}
    >
      {props.label}
    </button>
  );
}
