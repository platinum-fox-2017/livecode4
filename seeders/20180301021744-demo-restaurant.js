'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [{
      name: 'Hokben',
      address: 'pondok indah mall 1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
        name: 'KFC',
        address: 'pondok indah mall 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'yoshinoya',
        address: 'gandaria city',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
