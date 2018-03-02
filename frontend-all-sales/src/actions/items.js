export function getItems(APIURL) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/shopping`)
    .then(res => {
      console.log(res);
      return res.json()
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: "ITEMS_FETCHED",
        payload: res.items
      })
    })
  }
}
