'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items',
      [
        {
          name: 'FirstItem',
          price: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'SecondItem',
          price: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'ThirdItem',
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
