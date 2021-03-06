import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers/index'
// process.env = dev? push logger : null
 //
 // const middleware = [logger, thunk]
 // var initialState = {}
 //
 // export default createStore(
 //     reducer,
 //     initialState,
 //     composeWithDevTools(applyMiddleware(...middleware))
 //   )


//production
export default createStore(reducer, applyMiddleware(thunk))
