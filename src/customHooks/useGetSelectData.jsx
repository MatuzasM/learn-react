import { useFormContext } from "react-hook-form";

export function useGetSelectData() {

  const { register } = useFormContext();
  var currentTime = new Date().getFullYear()

  function generateArrayOfYears() {
    var max = currentTime
    var min = max - 30
    var years = []
    for (var i = max; i >= min; i--) {
      years.push(i)
    } return Array.from({ length: years.length }, (v, i) => ({ value: i, label: years[i] }));
  };

  function generateArrayOfDays(year = currentTime, month = 1) {
    let days = new Date(year, month, 0).getDate();
    return Array.from({ length: days }, (v, i) => ({ value: i + 1, label: i + 1 }));
  };

  function generateArrayOfMonths() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return Array.from({ length: months.length }, (v, i) => ({ value: i + 1, label: months[i] }));
  };

  function generateArrayOfGenders() {
    let genders = ['male', 'female', 'other'];
    return Array.from({ length: genders.length }, (v, i) => ({ value: genders[i], label: genders[i] }));
  };

  function generateArrayOfCourses() {
    let courses = ['java', 'javascript', 'ruby', 'php']
    return Array.from({ length: courses.length }, (v, i) => ({ value: courses[i], label: courses[i] }));
  };

  // Data object

  const monthList = generateArrayOfMonths();
  const dayList = generateArrayOfDays();
  const yearList = generateArrayOfYears();
  const genderList = generateArrayOfGenders();
  const coursesList = generateArrayOfCourses();

  let day = monthList.map(option => (
    <option key={option.value} value={option.value}>{option.label}</option>
  ));
  let month = dayList.map(option => (
    <option key={option.value} value={option.value}>{option.label}</option>
  ));


  return [register, day, month];
}