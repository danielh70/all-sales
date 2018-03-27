import { combineReducers } from 'redux';
import itemsReducer from './items';
import { reducer as formReducer } from 'redux-form';
import authReducer from './userAuth';

export default combineReducers({
  form: formReducer,
  items: itemsReducer,
  authorized: authReducer
});
