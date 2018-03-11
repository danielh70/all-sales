const initialState = {
  loggedIn: false,
  user: {
    firstName: ''
  },
  authToken: '',
  errors: []
}

export default (currentState=initialState, action) => {
  let newState
  switch(action.type){
    case("USER_STATUS"):{
      const userName = Object.assign({}, currentState.user, { firstName: action.payload.firstName })
      newState = Object.assign({}, currentState, { authToken: action.payload.authToken, user: userName, loggedIn: true })
      break
    }
    case("LOG_IN"): {
      const userName = Object.assign({}, currentState.user, { firstName: action.payload.firstName })
      newState = Object.assign({}, currentState, { authToken: action.payload.authToken, user: userName, loggedIn: true })
      break
    }
    case("USER_ADDED"):{
      newState = Object.assign({}, currentState, { newUserSuccess: true })
      break
    }
    case("LOG_OUT"): {
      const noUser = Object.assign({}, currentState.user, { firstName: '' })
      newState = Object.assign({}, currentState, { authToken: null, user: noUser, loggedIn: false })
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
