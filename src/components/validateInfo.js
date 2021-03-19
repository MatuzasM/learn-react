
export default function validateInfo(values) {
  let errors = {}

  if (!/^([a-z\d\.-]+)@([a-z\d\-]+)\.([a-z]{2,8})$/i.test(values.#email)) {
    errors.email = 'Email address is invalid'
  }
  if (!/^\+?(370)[ ]?(\d{3})[ ]?(\d{5})$/i.test(values.number)) {
    errors.email = 'Number is invalid'
  }
}
