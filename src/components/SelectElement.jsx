
export default function SelectElement(props) {
  const option = [
    { value: '0', label: 'January' },
    { value: '1', label: 'February' },
    { value: '2', label: 'April' },
    { value: '3', label: 'March' }
  ];

  let options = option.map(option => (
    <option key={option.value} value={option.value}>{option.label}</option>
  ));

  return (
    <select
      // onChange={getSelectedValue}      
      // ref={register}
      name={props.name}
      className={props.className}
    >
      <option>Select Item</option>
      {options}
    </select>
  );
}
