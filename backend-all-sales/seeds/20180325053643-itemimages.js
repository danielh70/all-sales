'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ItemImages',
      [
        {
          itemId: 1,
          imageId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 2,
          imageId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemId: 3,
          imageId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ItemImages', null, {})
  }
}
