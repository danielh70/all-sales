export default (currentState, action) => {
  let newState;
  switch(action.type) {
    case "ADD": {
      newState = Object.assign(
        {},
        currentState,
        {count: currentState.count + 1}
      )
      break;
    }
    default:
    newState = currentState
  }
  return newState
}
