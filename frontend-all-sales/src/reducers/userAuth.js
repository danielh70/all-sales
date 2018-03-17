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
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){

    case USER_STATUS:
      return state = { ...state, authToken: action.payload.authToken, user: { firstName: action.payload.firstName }, loggedIn: true }
    case USER_ADDED:
      return state =  { ...state, newUserSuccess: true }
    case LOG_OUT:
      return state = { ...state, authToken: null, user: { firstName: '' }, loggedIn: false }
    case ERROR_ADDING_USER:
      return state = { ...state, errors: action.payload.validations }
    default:
      return state
  }
};

// case("LOG_IN"): {
//   const userName = { ...state.user, firstName: action.payload.firstName }
//   state = { ...state, authToken: action.payload.authToken, user: userName, loggedIn: true }
//   break
// }
