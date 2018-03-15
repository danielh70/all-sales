const initialState = {
  all: [],
  currentUser: [],
  redirect: false
}

export default (currentState=initialState, action) => {
  let newState
  switch(action.type) {
    case("ITEMS_FETCHED"): {
      newState = { ...currentState, all: action.payload }
      break
    }
    case("ITEM_ADDED"): {
      let items = currentState.all.slice()
      items.push(action.payload)
      newState = { ...currentState, all: items }
      break
    }
    case("ADD_CURRENT_USER_ITEMS"): {
      newState = { ...currentState, currentUser: action.payload }
      break
    }
    case("REDIRECT_FROM_ITEMS"): {
      newState = { ...currentState, redirect: true }
      break
    }
    case("REMOVE_CART_ITEM"): {
      console.log("action payload", action.payload)
      newState = { ...currentState, currentUser: action.payload }
      break
    }
    default:
      newState = initialState
  }
  return newState
}
