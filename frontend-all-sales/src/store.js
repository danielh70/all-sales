import { createStore } from 'redux'
import counterReducer from './reducers/counter'


const initialState = {count: 0}
export default createStore(counterReducer, initialState)
