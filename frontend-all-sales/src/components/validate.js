import isValidEmail from 'sane-email-validation'

const validate = values => {

  const errors = {}
  console.log("errors:", errors)
  if (!values.firstName) {
    errors.firstName = '*'
  }
  if (!values.lastName) {
    errors.lastName = '*'
  }
  if (!values.password) {
    errors.password = '*'
  }
  if (!values.email) {
    errors.email = '*'
  } else if (!isValidEmail(values.email)) {
    errors.email = '*'
  }
  return errors
}

export default validate
