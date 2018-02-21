'use strict';
module.exports = (sequelize, DataTypes) => {
  var items = sequelize.define('items', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        items.belongsToMany(models.users, { through: "UserItems" })
      }
    }
  });
  return items;
};
