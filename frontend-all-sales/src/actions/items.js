export function getItems(APIURL) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/shopping`)
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
    return fetch(`${APIURL}api/items/user?authToken=9236b2f0-24bc-11e8-8d57-d5435fb00974`,
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
      console.log("RESPONSE:", res)
    })
    .catch(e => console.log("BIG ERROR", e))
  }
}
