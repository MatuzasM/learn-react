import { useGetSelectElement } from '../customHooks/useGetSelectElement';

export default function SelectElement(props) {
 
  const [register,options] = useGetSelectData();

  return (
    <select
      ref={register}
      id={props.id}
      name={props.name}
      className={`border-gray-400 block py-1 px-3 ${props.className} rounded focus:border-indigo-500 focus:ring-indigo-500`}
    >
      {props?.data.length && props.data.map((item, index)=>
      <option key={props.id.toString()} value={item.value}>{item.label}</option>
      )}
    </select>
  );
}
