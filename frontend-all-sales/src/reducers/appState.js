const initialState = {
  APIURL: "http://localhost:3000/"
}

export default (currentState=initialState, action) =>{
  let newState
  switch(action.type){
    default:
      newState = currentState
  }
  return newState
}
