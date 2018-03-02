const initialState = {
  newUserSuccess: false,
  user: {
    firstName: '',
    lastName:  '',
    email:     '',
    password:  ''
  },
  errors: []
}

export default (currentState=initialState, action) => {
  let newState
  switch(action.type){
    case("SIGNUP_FORM_UPDATED"):{
      const newUser = Object.assign({}, currentState.user, {[action.payload.attribute]: action.payload.value})
      newState = Object.assign({}, currentState, { user: newUser })
      break
    }
    case("USER_ADDED"):{
      newState = Object.assign({}, currentState, { newUserSuccess: true })
      break
    }

    case("ERROR_ADDING_USER"):{
      newState = Object.assign({}, currentState, {
        errors: action.payload.validations
      })
      break
    }

    default:
      newState = currentState
  }
  return newState
}
