'use strict'
var SequelizeMock = require('sequelize-mock')
var dbMock = new SequelizeMock()

module.exports = function(sequelize, DataTypes){
  return dbMock.define('Users', {
    firstName: 'Biggy',
    lastName: 'Smalls',
    email: 'haha@hahaha.com',
    password: 'randomasspassword'
  })
}
