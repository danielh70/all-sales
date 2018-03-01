import { createStore, applyMiddleware } from 'redux'
import combineReducers from './reducers/index'
import logger from 'redux-logger'


const initialState = {count: 0}
export default createStore(combineReducers, applyMiddleware(logger))
