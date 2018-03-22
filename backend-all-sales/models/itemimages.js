'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemImages = sequelize.define('ItemImages', {
    itemId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return ItemImages;
};
