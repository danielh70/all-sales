var APIURL;
  if(process.env.NODE_ENV === 'production') {
    APIURL = "/"
  } else {
    APIURL = "http://localhost:3000/"
  }

const initialState = {
  APIURL: APIURL
}

export default (currentState=initialState, action) =>{
  let newState
  switch(action.type){
    default:
      newState = currentState
  }
  return newState
}
