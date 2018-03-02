import { createStore, applyMiddleware } from 'redux'
import combineReducers from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default createStore(combineReducers, applyMiddleware(thunk, logger))
