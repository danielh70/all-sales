'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users',
      [
        {
          firstName: 'Joe',
          lastName: 'Shmoe',
          email: "joe@joejoe.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Kevin',
          lastName: 'Slander',
          email: "lah@lalala.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Bob',
          lastName: 'Bobby',
          email: "bob@reallybob.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Uers', null, {})
  }
}
