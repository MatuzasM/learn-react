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
  let days = new Date(year, month, 0).getDate();
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

export function generateArrayOfCity() {
  let city = ['City1','City2','City3','City4','City5']
  return Array.from({ length: city.length }, (v, i) => ({ value: city[i], label: city[i] }));
}

export function generateArrayOfState() {
  let state = ['State1','State2','State3','State4','State5']
  return Array.from({ length: state.length }, (v, i) => ({ value: state[i], label: state[i] }));
}