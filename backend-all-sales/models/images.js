'use strict';
module.exports = (sequelize, DataTypes) => {
  var images = sequelize.define('images', {
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        images.belongsToMany(models.items, { through: "ItemImages" })
      }
    }
  });
  return images;
};
