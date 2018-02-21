var express = require('express');
var bodyParser = require('body-parser')
var validator = require('express-validator')
var app = express();
let Users = require('./models').users
let Items = require('./models').items
let UserItems = require('./models').UserItems

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(validator())

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

/**
* Authorize user and get current user
*/
app.get('/user',
authorization,
function(request, response){
  response.json({user: request.currentUser})
})

// Lists all the users will edit/remove later. DJH 2/21/18
app.get('/users', (req, res) => {
  Users.findAll().then(users => {
    res.json({users: users})
  })
})

/**
* Lists all the items
*/
app.get('/items', (req, res) => {
  Items.findAll().then(items => {
    res.json({items: items})
  })
})

/**
* Log a user in
*/
app.post('/login', (req, res) => {
  var password = req.body.password
  var email = req.body.email

  Users.findOne({
    where: {
      email: email
    }
  })
  .then(user => {
    if(user.veryifyPassword(password)) {
      res.json({message: "Login Success"})
    } else {
      res.json({message: "Invalid Password"})
    }
  })
  .catch(e => {
    console.log(e)
  })
})

/**
* Create a new user
*/
app.post('/users', function(request, response){
  Users.create(
    {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password
    }
  ).then(user => {
    response.json({
      message: 'success',
      user: user
    })
  }).catch(error => {
    response.status(400)
    response.json({
      message: "Unable to create User",
      errors: error.errors
    })
  })
})

app.post('/items/new', (req, res) => {

})

//
// Items.create({
//   name: 'Chair',
//   price: 70,
//   Users: [
//     { firstName: "Joe" },
//     { firstName: "Slander" }
//   ]
// }, {
//   include: [{
//     model: Users,
//     as: 'Users'
//   }]
// })


Users.findOne({
  where: {
    id: 2
  }
})
.then(user => {
    user.addItems([1,2,3,4])
})
.then(function(item){
    // setItem(item)
}).catch(function(error){
  console.log(error)
})


// Users.addItem({
//   where: {
//     firstName: "Joe"
//   }
// })


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
