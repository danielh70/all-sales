var express = require('express')
var bodyParser = require('body-parser')
var validator = require('express-validator')
var app = express()
let Users = require('./models').users
let Items = require('./models').items
let UserItems = require('./models').UserItems
let cors = require('cors')
let path = require('path')
var sequelize = require('sequelize');

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(validator())
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../frontend-all-sales/build')));

app.get('/', (req, res) => {
  res.json({message: 'Server running =\')'})
});

const authorization = function(req, res, next) {
  const token = req.query.authToken || req.body.authToken
  if(token){
    Users.findOne({
      where: { authToken: token }
    }).then((user) => {
      if(user) {
        req.currentUser = user
        next()
      } else {
        // res.status(401)
        res.json({ message:'Authorization Token Invalid' })
      }
    })
  } else {
    res.status(401)
    res.json({ message: 'Authorization Token Required' })
  }
}

/**
* Authorize user and get current user
*/
app.get('/api/user',
authorization,
function(req, response){
  response.json({ user: req.currentUser })
})

// Lists all the users will edit/remove later. DJH 2/21/18
app.get('/api/users', (req, res) => {
  Users.findAll().then(users => {
    res.json({ users: users })
  })
})

/**
* Lists all the items
*/
app.get('/api/shopping', (req, res) => {
  Items.findAll().then(items => {
    res.json({ items: items })
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
    let auth = user.veryifyPassword(password)

    if(user && auth) {
      res.json({ user: user })
    } else {
      throw new Error
    }
  })
  .catch(e => {
    res.status(400)
    res.json({ message: "Invalid" })
  })
})

/**
* Create a new user
*/
app.post('/api/users', function(req, res){
  Users.create(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    }
  )
  .then(user => {
    res.status(201)
    res.json({
      message: 'success',
      authToken: user.authToken
    })
  })
  .catch(error => {
    res.status(400)
    res.json({
      message: "Unable to create User",
      errors: error.errors
    })
  })
})

app.post('/api/items/new', authorization, (req, res) => {
  console.log("req", req.body)
  let user = req.currentUser.id
  let items = req.body
  console.log("items ------------:", items);

  Users.findOne({
    where: {
      id: user
    }
  })
  .then(user => {
      user.addItems(items)
  })
  .then(user => {
    res.json({ message: "Items added to cart" })
  })
  .catch(e => {
    console.log("error!", e)
  })
})


// removeItems
// addItems
// createItem
// setItem(item)

// SELECT * FROM "UserItems"
// JOIN "items"
// ON "UserItems".id = "items".id
// WHERE "userId" = 34;

// UserItems.findAll({
//   where: {
//     userId: user
//   }
// })


app.get('/api/items/user', authorization, (req, res) => {
  let user = req.currentUser.id
  console.log("auth:", user)

  UserItems.sequelize.query(`
  SELECT * FROM "UserItems"
  JOIN "items"
  ON "UserItems"."itemId" = "items".id
  WHERE "userId" = ${user}
  `)
  .then(items => {
    res.json({ items: items })
  })
})

app.delete('/api/items/user/delete', authorization, (req, res) => {
  let user = req.currentUser.id
  let item = req.body
  console.log(...item)

  Users.findById(user).then(user => {
    user.removeItem(...item)
  })
  .then(item => {
    res.json({ message: "Item deleted" })
  })
})


// Users.findById(34).then(user => {
//   user.removeItem(1)
// })

app.get('/api/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/images', 'index.html')); });

//
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../frontend-all-sales/build', 'index.html')); });


module.exports = app
