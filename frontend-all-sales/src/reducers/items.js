const initialState = {
  all: [],
  currentUser: []
}

export default (currentState=initialState, action) => {
  let newState
  switch(action.type) {
    case("ITEMS_FETCHED"): {
      newState = Object.assign({}, currentState, { all: action.payload })
      break
    }
    case("ITEM_ADDED"): {
      let items = currentState.all.slice()
      items.push(action.payload)
      newState = Object.assign({}, currentState, { all: items })
      break
    }
    case("ADD_CURRENT_USER_ITEMS"): {
      newState = Object.assign({}, currentState, { currentUser: action.payload })
      break
    }
    default:
      newState = initialState
  }
  return newState
}
