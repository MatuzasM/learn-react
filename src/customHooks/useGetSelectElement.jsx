import { useFormContext } from "react-hook-form";

export function useGetSelectElement() {

  const { register } = useFormContext();
  const option = [
    { value: 'pirmas', label: 'pirmas' },
    { value: 'antras', label: 'antras' },
    { value: 'trecias', label: 'trecias' },
    { value: 'ketvirtas', label: 'ketvirtas' }
  ];


  let options = option.map(option => (
    <option key={option.value} value={option.value}>{option.label}</option>
  ));

  return [register, options];
}