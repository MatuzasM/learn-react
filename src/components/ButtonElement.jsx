
export default function ButtonElement(props) {
  return (
    <button
      type={props.type}
      className={`bg-yellow-400 hover:bg-yellow-300 text-yellow-900 text-yellow-800 focus:outline-none py-2 px-4 ${props.className}`}
    >
      {props.label}
    </button>
  );
}
