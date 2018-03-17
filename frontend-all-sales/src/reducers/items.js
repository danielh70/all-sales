import {
  ITEMS_FETCHED, ADD_CURRENT_USER_ITEMS,
  REDIRECT_FROM_ITEMS, REMOVE_CART_ITEM
} from '../actions/items';


const INITIAL_STATE = {
  all: [],
  currentUser: [],
  redirect: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case ITEMS_FETCHED:
      return state = { ...state, all: action.payload }
    case ADD_CURRENT_USER_ITEMS:
      return state = { ...state, currentUser: action.payload }
    case REDIRECT_FROM_ITEMS:
      return state = { ...state, redirect: true }
    case REMOVE_CART_ITEM:
    console.log("payload", action.payload)
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
