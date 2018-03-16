import {
  ERROR_ADDING_USER, USER_ADDED,
  USER_STATUS, LOG_OUT
} from '../actions/userForm';


const INITIAL_STATE = {
  loggedIn: false,
  user: {
    firstName: ''
  },
  authToken: '',
  errors: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){

    case USER_STATUS:
      const userName = { ...state.user, firstName: action.payload.firstName }
      return state = { ...state, authToken: action.payload.authToken, user: userName, loggedIn: true }
    case USER_ADDED:
      return state =  { ...state, newUserSuccess: true }
    case LOG_OUT:
      const noUser = { ...state.user, firstName: '' }
      return state = { ...state, authToken: null, user: noUser, loggedIn: false }
    case ERROR_ADDING_USER:
      state = { ...state, errors: action.payload.validations }

    default:
      return state
  }
}

// case("LOG_IN"): {
//   const userName = { ...state.user, firstName: action.payload.firstName }
//   state = { ...state, authToken: action.payload.authToken, user: userName, loggedIn: true }
//   break
// }
