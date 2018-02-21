'use strict';
const crypto = require('crypto')
const uuid = require('uuid/v1')

module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true
      }
    },
    encryptedPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    authToken: DataTypes.STRING,
    authTokenExpiration: DataTypes.DATE,
    salt: DataTypes.STRING
  }, {
  classMethods: {
    associate: function(models) {
      users.belongsToMany(models.items, { through: "UserItems" })
    }
  },
    setterMethods:{
      password(value) {
        if(value) {
          const salt = uuid();
          this.setDataValue('salt', salt)
          const hash = this.encrypt(value);
          this.setDataValue('encryptedPassword', hash)
        }
      }
    },

    instanceMethods:{
      toJSON(){
        return {
          id: this.get('id'),
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          email: this.get('email'),
          authToken: this.get('authToken'),
          authTokenExpiration: this.get('authTokenExpiration'),
        }
      },
      encrypt(value) {
        const salt = this.get('salt');
        return crypto.createHmac('sha512', salt)
        .update(value)
        .digest('hex')
      },
      setAuthToken() {
        const token = uuid();
        const expiration = new Date();
        expiration.setMonth(expiration.getMonth() + 1)
        this.setDataValue('authToken', token)
        this.setDataValue('authTokenExpiration', expiration)
      },
      veryifyPassword(unverifiedPassword) {
        const encryptedUnverifiedPassword = this.encrypt(unverifiedPassword);
        return encryptedUnverifiedPassword === this.get('encryptedPassword')
      }
    },
    hooks:{
      beforeCreate: function(user, options) {
        user.setAuthToken()
      }
    }
  });
  return users;
};
