import isValidEmail from 'sane-email-validation'

const validate = values => {

  const errors = {}
  // console.log("errors:", errors)
  if (!values.firstName || !values.firstName.trim()) {
    errors.firstName = '*'
  }
  if (!values.lastName || !values.lastName.trim()) {
    errors.lastName = '*'
  }
  if (!values.password || !values.password.trim()) {
    errors.password = '*'
  }
  if (!values.email || !values.email.trim()) {
    errors.email = '*'
  } else if (!isValidEmail(values.email)) {
    errors.email = '*'
  }
  if (!values.title || !values.title.trim()) {
    errors.title = '*'
  }
  if (!values.price || !values.price.trim()) {
    errors.price = '*'
  }
  if (!values.description || values.description.trim().length < 10) {
    errors.description = '*'
  }
  if (!values.condition) {
    errors.condition = '*'
  }
  return errors
}

export default validate
