'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items',
      [
        {
          name: 'Mug',
          price: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Redux',
          price: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'React',
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
