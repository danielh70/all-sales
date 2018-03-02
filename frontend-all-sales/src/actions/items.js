export function getItems(APIURL) {
  return (dispatch) => {
    return fetch(`${APIURL}api/items`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      dispatch({
        type: "ITEMS_FETCHED",
        payload: res.items
      })
    })
  }
}
