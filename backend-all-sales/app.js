var express = require('express')
var bodyParser = require('body-parser')
var validator = require('express-validator')
var app = express()
let Users = require('./models').users
let Items = require('./models').items
let UserItems = require('./models').UserItems
let ItemImages = require('./models').ItemImages
let Images = require('./models').images
let cors = require('cors')
const crypto = require('crypto')
const fs = require ('fs')
let path = require('path')
let aws = require('aws-sdk')
let multer = require('multer')
let multerS3 = require('multer-s3');
var sequelize = require('sequelize');

aws.config.loadFromPath('./config/config.json');
const s3 = new aws.S3({
  Bucket: "all-sales"
});
const BUCKETNAME = process.env.S3_BUCKET;


app.use(express.static('public'))
app.use(express.static(path.resolve(__dirname, '../frontend-all-sales/build')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(validator());
app.use(cors());



app.get('/', (req, res) => {
  res.json({message: 'Server running =\')'})
});

const router = new express.Router();

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
    res.json({ message: "Invalid email or password" })
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



app.post('/api/upload', (req, res) => {
    const { title, description, name, image } = req.body
    let { data, extension } = image
    let fileprefix = crypto.createHash('md5').update(data).digest('hex')
    let filename = `${fileprefix}.${extension}`

    data = new Buffer(data.replace(/^data:image\/\w+;base64,/, ""),'base64')

    const s3params = {
      Bucket: 'all-sales',
      Key: filename,
      Body: data,
      ACL: 'public-read',
      ContentEncoding: 'base64',
      ContentType: `image/${extension}`
    }

    console.log('s3params:', s3params);

    s3.putObject(s3params, (err, data) => {
      // if (err) {return console.log(err) }
      // console.log('Image successfully uploaded.');

      console.log("data:", data);
      console.log("error:", err);

      const awsUrl = 'https://s3-us-west-2.amazonaws.com/all-sales/'
      console.log("link to pic", awsUrl + filename);
    })
  })


  app.post('/api/items/new', authorization, (req, res) => {
    console.log("req", req.body)
    let user = req.currentUser.id
    let items = req.body
    let images = req.body
    // console.log("items ------------:", items);

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



// POSTING NEW ITEM WITH IMAGES
app.post('/api/posting/new', (req, res) => {

  let testData = ['https://s3-us-west-2.amazonaws.com/all-sales/cf090c62416aae104bc6f9a06c4d6899.png', 'test']
  const { name, price } = req.body


  Items.create({
    name: 'testcrap',
    price: 3434
  })
  .then(item => {
    Images.bulkCreate([
        {url: 'test1'},
        {url: 'test2'},
        {url: 'TESTURL'}

    ], { returning: true})
    .then(res => {
        res.forEach(el => {
          item.addImages([el.id])
        })
    })
  })
  .catch(e => {
    console.log("error!", e)
  })
})





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
  console.log("item:", item)

  Users.findById(user).then(user => {
    user.removeItem(...item)
  })
  .then(item => {
    res.json({ message: "Item deleted" })
  })
})



app.get('/api/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/images', 'index.html')); });


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend-all-sales/build', 'index.html')); });


module.exports = app

//

//
//   Items.create({
//       title: title,
//       description: description,
//       location: location,
//       cost: cost,
//       imageName: awsUrl + filename,
//   }).then((activity) => {

//       res.json({activity: activity})
//       // Takes the tag checkbox from our form
//       tags = req.body.tags
//       let tagArr = []
//       // Pushes Id of newly made activity and any tag selected to an array to use for our ActivityTag Table
//       for (var property in tags) {
//           let val = {
//               ActivityId: activity.id,
//               TagId: property,
//           }
//           // Checks if a tag is checked or not
//           tags[property] === true
//               ? tagArr.push(val)
//               : ''
//       }
//       // Takes the array with new ActivityId and selected TagId and pushes them to our join table (ActivityTag)
//       ActivityTag.bulkCreate(tagArr).then(() => {
//           return ActivityTag.findAll();
//       })
//   })
// })

// Users.findById(34).then(user => {
//   user.removeItem(1)
// })


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


// If you need to join a table twice you can double join the same table
// Team.hasOne(Game, {as: 'HomeTeam', foreignKey : 'homeTeamId'});
// Team.hasOne(Game, {as: 'AwayTeam', foreignKey : 'awayTeamId'});
//
// Game.belongsTo(Team);
