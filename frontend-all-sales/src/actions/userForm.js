import validate from '../components/validate'


export const ERROR_ADDING_USER = 'ERROR_ADDING_USER';
export const USER_ADDED        = 'USER_ADDED';
export const USER_STATUS       = 'USER_STATUS';
export const LOG_OUT           = 'LOG_OUT';

let APIURL; process.env.NODE_ENV === 'production' ? APIURL = "/" : APIURL = "http://localhost:3000/";
const TOKEN = localStorage.getItem("authToken")

export function addUser(e) {
  return dispatch =>
    fetch(`${APIURL}api/users`,
      {
        body: JSON.stringify(e),
        headers: { 'Content-Type': 'application/json' },
        method: "POST"
      })
    .then(res => res.json())
    .then(res => {
      if(res.errors) {
        dispatch({
          type: ERROR_ADDING_USER,
          payload: res.errors
        })
      } else {
        dispatch({
          type: USER_ADDED,
          payload: res.user
        })
      }
    })
  .catch(e => console.log(e))
}

export function login(e) {
     fetch(`${APIURL}api/login`,
      {
        body: JSON.stringify(e),
        headers: { 'Content-Type': 'application/json' },
        method: "POST"
      })
    .then(res => res.json())
    .then(res => {
      if (res.message) {
          localStorage.setItem("errarar", res.message)
          window.location.reload()
      }
      if(res.status !== 400) {
      localStorage.setItem("authToken", res.user.authToken)
      }
    })
    .then(res => window.location.reload())
  .catch(res => {
    console.log("LOGGING RESPONSE", res)
  })
}


export function setLoginStatus() {
  return dispatch =>
    fetch(`${APIURL}api/user?authToken=${TOKEN}`)
      .then(res => res.json())
      .then(res => {
        if(res.status !== 401) {
        dispatch({
          type: USER_STATUS,
          payload: res.user
        })
        return
      } else {
        dispatch({
          type: LOG_OUT
        })
      }
    })
  .catch(e => console.log(e))
}

export function logout() {
  localStorage.removeItem("authToken")
  return ({
    type: LOG_OUT
  })
}

export function createUser(e) {
    return fetch(`${APIURL}api/users`,
      {
        body: JSON.stringify(e),
        headers: { 'Content-Type': 'application/json' },
        method: "POST"
      }
    )
    .then(res =>
      res.json())
    .then(res =>
      localStorage.setItem("authToken", res.authToken))
    .then(res =>
      window.location.reload())
  .catch(e => console.log(e))
}
