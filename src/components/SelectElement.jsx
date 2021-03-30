import { useFormContext } from "react-hook-form";

export default function SelectElement(props) {
  const { register } = useFormContext(); // retrieve all hook methods
  const option = [
    { value: 'pirmas', label: 'pirmas' },
    { value: 'antras', label: 'antras' },
    { value: 'trecias', label: 'trecias' },
    { value: 'ketvirtas', label: 'ketvirtas' }
  ];

  let options = option.map(option => (
    <option key={option.value} value={option.value}>{option.label}</option>
  ));

  return (
    <select
      ref={register}
      name={props.name}
      className={props.className}
    >
      <option>Select Item</option>
      {options}
    </select>
  );
}
