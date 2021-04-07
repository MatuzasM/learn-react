import { useGetSelectElement } from '../customHooks/useGetSelectElement';
import { useGetSelectData } from '../customHooks/useGetSelectData';

export default function SelectElement(props) {
  /*   const { register } = useFormContext(); // retrieve all hook methods
    const option = [
      { value: 'pirmas', label: 'pirmas' },
      { value: 'antras', label: 'antras' },
      { value: 'trecias', label: 'trecias' },
      { value: 'ketvirtas', label: 'ketvirtas' }
    ];
  
    let options = option.map(option => (
      <option key={option.value} value={option.value}>{option.label}</option>
    )); */
  //const [register, options] = useGetSelectElement();
  const [register, day, month] = useGetSelectData();

  return (
    <select
      ref={register}
      id={props.id}
      name={props.name}
      className={`border-gray-400 block py-1 px-3 ${props.className} rounded focus:border-indigo-500 focus:ring-indigo-500`}
    >
      <option>Select Item</option>
      {day}
      {month}
    </select>
  );
}
