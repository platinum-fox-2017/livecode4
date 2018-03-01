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
    const data = [{
      name: 'KFC BINUS',
      address: 'BINUS',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'KFC Syahdan',
      address: 'Syahdan',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Starbucks BINUS',
      address: 'BINUS ANGGREK',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    return queryInterface.bulkInsert('Restaurants', data, {})
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
