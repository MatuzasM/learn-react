export default function SelectElement(props) {

  return (
    <select
      id={props.id}
      name={props.name}
      className={`border-gray-400 block py-1 px-3 ${props.className} rounded focus:border-indigo-500 focus:ring-indigo-500`}
    >
      {props?.data?.length && props.data.map((item, index) =>
        <option key={index.toString()} value={item.value}>{item.label}</option>
      )}
    </select>
  );
}
