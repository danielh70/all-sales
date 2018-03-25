'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('images',
      [
        {
          url: 'https://s3-us-west-2.amazonaws.com/all-sales/e14ff35637f115c7b04f95ed3323e1eb.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'https://s3-us-west-2.amazonaws.com/all-sales/cf090c62416aae104bc6f9a06c4d6899.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: 'https://s3-us-west-2.amazonaws.com/all-sales/c49d42624edc70d4cdda0c9db949d788.png',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('images', null, {})
  }
}
