'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items',
      [
        {
          name: 'First Item',
          price: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Second Item',
          price: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Third Item',
          price: 50,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('items', null, {})
  }
}
