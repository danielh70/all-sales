const request = require('supertest')
const app = require('../app')
let Users = require('../models').Users

jest.mock('../models/mocks/user')

describe("App", ()=>{
  it("Tests the root path", ()=>{
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200)
    })
  })

  it("Lists items", ()=>{
    return request(app).get("/api/shopping").then(response => {
      expect(response.statusCode).toBe(200)
    })
  })

  // it("Logs in", ()=>{
  //   return request(app).post("/login").send({
  //     email: "danhook007@icloud.com",
  //     password: "tonyromo1"
  //   })
  //   .then(res => {
  //     expect(res.body.message).toBe("Login Success")
  //   })
  // })


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
