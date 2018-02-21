var express = require('express');
var bodyParser = require('body-parser')
var app = express();
let Users = require('./models').Users

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({message: 'Server running =\')'})
});

const authorization = function(request, response, next){
  const token = request.query.authToken || request.body.authToken
  if(token){
    User.findOne({
      where: {authToken: token}
    }).then((user)=>{
      if(user){
        request.currentUser = user
        next()
      }else{
        response.status(401)
        response.json({message:'Authorization Token Invalid'})
      }
    })
  }else{
    response.status(401)
    response.json({message: 'Authorization Token Required'})
  }
}

app.get('/user',
authorization,
function(request, response){
  response.json({user: request.currentUser})
})

app.post('/users', function(request, response){
  Users.create(
    {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password
    }
  ).then((user)=>{
    response.json({
      message: 'success',
      user: user
    })
  }).catch((error)=>{
    response.status(400)
    response.json({
      message: "Unable to create User",
      errors: error.errors
    })
  })
})


























//
// Users.create({
//   firstName: 'Dan',
//   email: 'danhook007@icloud.com',
//   lastName: 'Hook'
// }).then(function(user){
//   // console.log(user.get())
//
//   return user.createItem({
//     price: '100',
//     name: 'Headphones'
//   })
// })
// .then(function(item){
//   // console.log("New Item", item.get())
// }).catch(function(error){
//   console.log(error)
// })

// Users.findOne({
//   where: {
//   firstName: "Dan"
//   }
// }).then(function(user) {
//   return user.createItem({
//     price: '200',
//     name: "good headphones"
//   })
// })















module.exports = app
