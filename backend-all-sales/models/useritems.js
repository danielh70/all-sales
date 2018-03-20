'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserItems = sequelize.define('UserItems', {
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return UserItems;
};
