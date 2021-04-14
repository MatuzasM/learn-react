var currentTime = new Date().getFullYear()

// functions used to create a Form object
export function generateArrayOfYears() {
  var max = currentTime
  var min = max - 30
  var years = []
  for (var i = max; i >= min; i--) {
    years.push(i)
  } return Array.from({ length: years.length }, (v, i) => ({ value: i, label: years[i] }));
}

export function generateArrayOfDays(year = currentTime, month = 1) {
  days = new Date(year, month, 0).getDate();
  return Array.from({ length: days }, (v, i) => ({ value: i + 1, label: i + 1 }));
}

export function generateArrayOfMonths() {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return Array.from({ length: months.length }, (v, i) => ({ value: i + 1, label: months[i] }));
}

export function generateArrayOfGenders() {
  let genders = ['male', 'female', 'other'];
  return Array.from({ length: genders.length }, (v, i) => ({ value: genders[i], label: genders[i] }));
}

export function generateArrayOfCourses() {
  let courses = ['java', 'javascript', 'ruby', 'php']
  return Array.from({ length: courses.length }, (v, i) => ({ value: courses[i], label: courses[i] }));
}

// Data object for state/city
const cityByState = {
  texas: ['Elpaso', 'Dallas'],
  florida: ['Miami', 'Orlando'],
  indiana: ['Indianapolis', 'Madison'],
  nevada: ['Lasvegas', 'Virginiacity']
}

export function generateArrayOfCity(city = Object.values(cityByState).flat()) {
  return Array.from({ length: city.length }, (v, i) => ({ value: city[i].replace(/\s+/g, '-').toLowerCase(), label: city[i] }));
}

export function generateArrayOfState(state = Object.keys(cityByState)) {
  return Array.from({ length: state.length }, (v, i) => ({ value: state[i], label: state[i] })); // change value to word - city[i].replace(/\s+/g, '-').toLowerCase()
}

export function selectState() {
  let selectedStateValue = document.getElementById("state").value;
  form.city = generateArrayOfCity(cityByState[selectedStateValue])
  const options = createOption(form.city);
  document.getElementById('city').innerHTML = options;
}

export function selectCity() {
  let selectedCityValue = document.getElementById("city").value.replace(/[-]/g, ' ');
  upperCaseCity = selectedCityValue.charAt(0).toUpperCase() + selectedCityValue.slice(1);
  state = findStateByCity(upperCaseCity);
  document.getElementById('state').innerHTML = "<option value=" + state + ">" + state + "</option>";
}
function findStateByCity(cityUpperCased) {
  for (city in cityByState) {
    if (cityByState[city].includes(cityUpperCased)) return city;
  }
  return false;
}

// Data object
const form = {
  month: generateArrayOfMonths(),
  day: generateArrayOfDays(),
  year: generateArrayOfYears(),
  gender: generateArrayOfGenders(),
  courses: generateArrayOfCourses(),
  city: generateArrayOfCity(),
  state: generateArrayOfState()
}

// eventListener functions
export function selectMonth() {
  let selectedMonth = document.getElementById("month").value;
  selectedYearId = document.getElementById("year").value;
  selectedYear = form.year[selectedYearId].label
  form.day = generateArrayOfDays(selectedYear, selectedMonth);
  const options = createOption(form.day);
  document.getElementById('day').innerHTML = options;
}

export function selectYear() {
  form.month = generateArrayOfMonths();
  const options = createOption(form.month);
  document.getElementById('month').innerHTML = options;
  selectMonth();
}

// Create option elements
export function createOption(dataList) {
  let option = "";
  for (let dataItem of dataList) {
    //if (dataItem.value && dataItem.label) if statement removes first dataItem?
    option += "<option value=" + dataItem.value + ">" + dataItem.label + "</option>";
  }
  return option;
}
for (const formKey of Object.keys(form)) {
  const options = createOption(form[formKey]);
  document.getElementById(formKey).innerHTML = options;
}