import { combineReducers } from 'redux'
import userFormReducer from './userForm'
import appStateReducer from './appState'

export default combineReducers({
  userForm: userFormReducer,
  appState: appStateReducer
})
