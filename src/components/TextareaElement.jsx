
export default function TextareaElement(props) {

  return (
    <textarea
      rows={props.rows}
      name={props.name}
      className={props.className}
    />
  );
}
