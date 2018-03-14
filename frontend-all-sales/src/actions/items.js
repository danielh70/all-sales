const token = localStorage.getItem("authToken")

export function getItems(APIURL) {
  return (dispatch) => {
    return fetch(`${APIURL}api/shopping`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      // console.log(res);
      dispatch({
        type: "ITEMS_FETCHED",
        payload: res.items
      })
    })
  }
}

export function getUserItems(APIURL) {
  return (dispatch) => {
    return fetch(`${APIURL}api/items/user?authToken=${token}`,
    {
      headers: {
        "Content-Type": 'application/json'
      }
    })
    .then(res => {
      return res.json()
    })
    .then(res => {
      dispatch({
        type: "ADD_CURRENT_USER_ITEMS",
        payload: res.items[0]
      })
      // console.log("RESPONSE:", res)
    })
    .catch(e => console.log(e))
  }
}

export function redirect() {
  return {
    type: "REDIRECT_FROM_ITEMS"
  }
}


export default (function showResults(values) {
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
})
