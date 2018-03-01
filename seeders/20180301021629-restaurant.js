'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [
    {
      name: 'KFC',
      address: 'Jakarta Barat',
      createdAt : new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Hokben',
      address: 'Jakarta Selatan',
      createdAt : new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'MCD',
      address: 'Jakarta Selatan',
      createdAt : new Date(),
      updatedAt: new Date(),
    }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
