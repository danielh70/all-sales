var express = require('express')
var bodyParser = require('body-parser')
var validator = require('express-validator')
var app = express()
let Users = require('./models').users
let Items = require('./models').items
let UserItems = require('./models').UserItems
let cors = require('cors')
var path = require('path')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(validator())
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../frontend-all-sales/build')));

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
app.get('/api/user',
authorization,
function(request, response){
  response.json({user: request.currentUser})
})

// Lists all the users will edit/remove later. DJH 2/21/18
app.get('/api/users', (req, res) => {
  Users.findAll().then(users => {
    res.json({users: users})
  })
})

/**
* Lists all the items
*/
app.get('/api/shopping', (req, res) => {
  Items.findAll().then(items => {
    res.json({items: items})
  })
})

/**
* Log a user in
*/
app.post('/api/login', (req, res) => {
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
app.post('/api/users', function(request, response){
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

// app.post('/api/items/new', (req, res) => {
//
// })


// removeItems
// addItems
// createItem
// setItem(item)

Users.findOne({
  where: {
    id: 3
  }
})
.then(user => {
    user.addItems([1,2,3])
})
.catch(e => {
  console.log(e)
})


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend-all-sales/build', 'index.html')); });


module.exports = app
