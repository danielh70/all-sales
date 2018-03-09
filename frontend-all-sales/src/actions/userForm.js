import axios from 'axios';
const APIURL = 'http://localhost:3000/'


export function addUser(APIURL, e){
  return (dispatch) => {
    return fetch(`${APIURL}api/users`,
      {
        body: JSON.stringify(e),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then(res => {
      console.log("res", res);
      return res.json()
    })
    .then(res => {
      console.log("2nd res", res);
      if(res.errors) {
        dispatch({
          type: 'ERROR_ADDING_USER',
          payload: res.errors
        })
      } else {
        dispatch({
          type: 'USER_ADDED',
          payload: res.user
        })
      }
    })
  }
}

export function userLogin(user) {
  return axios.post(`${APIURL}api/login`)
  .catch(e => console.log("error logging in:", e))
}

export function createUser(user) {
    return axios.post(`${APIURL}api/users`, user)
    .catch(e => console.log("error posting:", e))
  }
