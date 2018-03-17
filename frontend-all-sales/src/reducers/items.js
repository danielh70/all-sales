import {
  ITEMS_FETCHED, ADD_CURRENT_USER_ITEMS,
  REDIRECT_FROM_ITEMS, REMOVE_CART_ITEM,
  LOADING_START, LOADING_STOP
} from '../actions/items';


const INITIAL_STATE = {
  all: [],
  currentUser: [],
  redirect: false,
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    
    case LOADING_START:
      return state = { ...state, loading: true }
    case LOADING_STOP:
      return state = { ...state, loading: false }
    case ITEMS_FETCHED:
      return state = { ...state, all: action.payload }
    case ADD_CURRENT_USER_ITEMS:
      return state = { ...state, currentUser: action.payload }
    case REDIRECT_FROM_ITEMS:
      return state = { ...state, redirect: true }
    case REMOVE_CART_ITEM:
      return state = { ...state, currentUser: action.payload }
    default:
      return state
  }
}


// case 'ITEM_ADDED': {
//   let items = state.all.slice()
//   items.push(action.payload)
//   state = { ...state, all: items }
//   break
// }
