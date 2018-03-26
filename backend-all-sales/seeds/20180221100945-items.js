'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items',
      [
        {
          name: 'Mug',
          price: 20,
          description: 'Brand new mug with "HUSTLE" printed on it. If you\'re a hard worker then you\'ll love this mug.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Redux',
          price: 100,
          description: 'Redux is a library to help you manage your state. Most commonly used with React and surprisingly lightweight. You probably shouldn\'t buy it though, it\'s free online.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'React',
          price: 50,
          description: 'React is a brilliant javascript library. You will only be re-rendering changes in the DOM!',
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
