'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [{
      name: 'Hokben',
      address: 'Pondok Indah Mall 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'KFC',
      address: 'Pondok Indah Mall 2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Yoshinoya',
      address: 'Gandaria City',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
