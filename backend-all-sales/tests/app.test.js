const request = require('supertest')
const app = require('../app')

describe("App", ()=>{
  it("Tests the root path", ()=>{
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200)
    })
  })

  it("Lists items", ()=>{
    return request(app).get("/items").then(response => {
      expect(response.statusCode).toBe(200)
    })
  })

  // it("Creates a User", ()=>{
  //   return request(app).post("/users").send({
  //     firstName: "Testt",
  //     lastName: "Dummyt",
  //     email: "testingtt@test.com",
  //     password: "reallytest"
  //   })
  //   .then(res => {
  //     expect(res.body.firstName).toBe("Testt")
  //     expect(res.body.lastName).toBe("Dummyt")
  //     expect(res.body.email).toBe("testingtt@test.com")
  //   })
  // })
})
