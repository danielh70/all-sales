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
  let token = localStorage.getItem("authToken")

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
      console.log("RESPONSE:", res)
    })
    .catch(e => console.log("BIG ERROR", e))
  }
}

export function removeCartItem(APIURL, id) {
  return {
    type: "REMOVE_CART_ITEM",
    payload: id
  }
}
