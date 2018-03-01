var APIURL;
  if(process.env.NODE_ENV === 'production') {
    APIURL = "/"
  } else {
    APIURL = "http://localhost:3000/"
  }
const authToken = localStorage.getItem("authToken")

export const functions = {
  authCheck: () => {
    fetch(`${APIURL}api/user?authToken=${authToken}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      }
    )
    .then(res => {
      if (res.status === 401) {
        res = false
      console.log("AUTH FAIL", res)
    } else {
        res = true
      console.log("AUTH SUCCESS", res)
    }
    })
    .catch(e => console.log(e))
  }
}
