
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
    .then((rawResponse)=> {
      return rawResponse.json()
    })
    .then((parsedResponse) => {
      if(parsedResponse.errors) {
        dispatch({
          type: 'ERROR_ADDING_USER',
          payload: parsedResponse.errors
        })
      } else {
        dispatch({
          type: 'USER_ADDED',
          payload: parsedResponse.user
        })
      }
    })
  }
}
