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
    
    return queryInterface.bulkInsert('Restaurants', [{
      name: 'PHD',
      address: 'Gandaria City',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'McDonald',
      address: 'Central Park',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'KFC',
      address: 'Neo Soho',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
