
export function updateUserForm(attribute, value){
  return {
    type: 'SIGNUP_FORM_UPDATED',
    payload: {
      attribute: attribute,
      value: value
    }
  }
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
      return res.json()
    })
    .then(res => {
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
