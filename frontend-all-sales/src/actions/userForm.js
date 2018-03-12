var APIURL;
  if(process.env.NODE_ENV === 'production') {
    APIURL = "/"
  } else {
    APIURL = "http://localhost:3000/"
  }


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
      // console.log("res", res);
      return res.json()
    })
    .then(res => {
      // console.log("2nd res", res);
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

export function login(e){
    return fetch(`${APIURL}api/login`,
      {
        body: JSON.stringify(e),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then(res => {
      // console.log("res", res)
      return res.json()
    })
    .then(res => {
      localStorage.setItem("authToken", res.user.authToken)
      // console.log("2nd res", res)
    })
    .then(res => {
      window.location.reload()
    })
    .catch(e => console.log(e))
}


export function setLoginStatus(APIURL) {
  let token = localStorage.getItem("authToken")

  return (dispatch) => {
    return fetch(`${APIURL}api/user?authToken=${token}`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        // console.log("LOGIN STATUS RESPONSE", res)
        if(res.status !== 401) {
        dispatch({
          type: "USER_STATUS",
          payload: res.user
        })
      } else {
        dispatch({
          type: "LOG_OUT"
        })
      }
    })
    .catch(e => console.log(e))
  }
}

export function logout() {
  localStorage.removeItem("authToken")
  return ({
    type: "LOG_OUT"
  })
}


export function createUser(e) {
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
      // console.log("res", res)
      return res.json()
    })
    .then(res => {
      localStorage.setItem("authToken", res.authToken)
      // console.log("2nd res", res)
    })
    .then(res => {
      window.location.reload()
    })
    .catch(e => console.log(e))
}
