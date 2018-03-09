import { combineReducers } from 'redux'
import userFormReducer from './userForm'
import appStateReducer from './appState'
import itemsReducer from './items'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  form: formReducer,
  appState: appStateReducer,
  items: itemsReducer
})
