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
      const newUser = { ...currentState.user, [action.payload.attribute]: action.payload.value }
      newState = { ...currentState, user: newUser }
      break
    }
    case("USER_ADDED"):{
      newState = { ...currentState, newUserSuccess: true }
      break
    }

    case("ERROR_ADDING_USER"):{
      newState = { ...currentState, errors: action.payload.validations }
      break
    }

    default:
      newState = currentState
  }
  return newState
}
