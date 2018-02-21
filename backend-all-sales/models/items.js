'use strict';
module.exports = (sequelize, DataTypes) => {
  var Items = sequelize.define('Items', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Items.belongsTo(models.Users, { foreignKey: "userId" })
      }
    }
  });
  return Items;
};
