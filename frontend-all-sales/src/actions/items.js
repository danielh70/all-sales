export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const ITEMS_FETCHED = 'ITEMS_FETCHED';
export const ADD_CURRENT_USER_ITEMS = 'ADD_CURRENT_USER_ITEMS';
export const REDIRECT_FROM_ITEMS = 'REDIRECT_FROM_ITEMS';
export const LOADING_STOP = 'LOADING_STOP';
export const LOADING_START = 'LOADING_START';

var APIURL;
  if (process.env.NODE_ENV === 'production') {
    APIURL = "/"
  } else {
    APIURL = "http://localhost:3000/"
  }

const token = localStorage.getItem("authToken")

export function getItems() {
  return (dispatch) => {
    return fetch(`${APIURL}api/shopping`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      // console.log(res);
      dispatch({
        type: ITEMS_FETCHED,
        payload: res.items
      })
    })
  }
}

export function startLoading() {
  return {
    type: LOADING_START
  }
}

export function stopLoading() {
  return {
    type: LOADING_STOP
  }
}

export function getUserItems(arr) {
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
        type: ADD_CURRENT_USER_ITEMS,
        payload: res.items[0]
      })
      // console.log("RESPONSE:", res)
    })
    .catch(e => console.log(e))
  }
}

export function removeCartItem(e, nextState) {
  console.log("e", e);
  return (dispatch) => {
    return fetch(`${APIURL}api/items/user/delete?authToken=${token}`,
      {
        body: JSON.stringify([e]),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "DELETE"
      }
    )
    .then(res => {
      return res.json()
    })
    .then(res => {
      dispatch({
        type: REMOVE_CART_ITEM,
        payload: nextState
      })
    })
    .catch(err => console.log("error", err))
  }
}

//
// export function getUserItems() {
//   let cartItems = localStorage.getItem("cartItems")
//   let items = JSON.parse(cartItems)
//
//     return {
//       type: "GET_CART_ITEMS",
//       payload: items
//     }
//   }

export function submitItems(selected) {
  return (dispatch) => {
    return fetch(`${APIURL}api/items/new?authToken=${token}`,
      {
        body: JSON.stringify(selected),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then(res => {
      return res
    })
    .then(res => {
      dispatch({
        type: ITEMS_FETCHED,
        payload: res
      })
    })
  }
}


export function redirect() {
  return {
    type: REDIRECT_FROM_ITEMS
  }
}


export default (function showResults(values) {
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
})
