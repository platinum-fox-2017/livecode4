'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Restaurants', [
      {
        name: 'Sushido',
        address: 'Sushi st.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chicken Rogers',
        address: 'Roast st.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Flip Burgers',
        address: 'Patty st.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Restaurants', null, {})
  }
};
