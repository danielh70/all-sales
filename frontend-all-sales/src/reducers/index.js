import { combineReducers } from 'redux'
import appStateReducer from './appState'
import itemsReducer from './items'
import { reducer as formReducer } from 'redux-form'
import authReducer from './userAuth'

export default combineReducers({
  form: formReducer,
  appState: appStateReducer,
  items: itemsReducer,
  authorized: authReducer
})
