import { combineReducers } from 'redux'
import userFormReducer from './userForm'
import appStateReducer from './appState'
import itemsReducer from './items'

export default combineReducers({
  userForm: userFormReducer,
  appState: appStateReducer,
  items: itemsReducer
})
