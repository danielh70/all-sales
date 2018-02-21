'use strict';
const crypto = require('crypto')
const uuid = require('uuid/v1')

module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    encryptedPassword: DataTypes.STRING,
    authToken: DataTypes.STRING,
    authTokenExpiration: DataTypes.DATE,
    salt: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Users.hasMany(models.Items, { foreignKey: "userId" })
      }
    }, {
      instanceMethods: {
        toJSON()
        return {
          id: this.get('id'),
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          email: this.get('email'),
          authToken: this.get('authToken'),
          authTokenExpiration: this.get('authTokenExpiration')
        },
        setAuthToken(){
           const token = uuid()
           const expiration = new Date()
           expiration.setMonth(expiration.getMonth() + 1)
           this.setDataValue('authToken', token)
           this.setDataValue('authTokenExpiration', expiration)
        },
      },
    }
  });
  return Users;
};
