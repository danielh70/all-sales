'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemImages = sequelize.define('ItemImages', {
    itemId: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          // ItemImages.belongsToMany(models.items, { through: "ItemImages" })
      }
    }
  });
  return ItemImages;
};
