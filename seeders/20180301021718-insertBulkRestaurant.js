'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [{
      name: 'Hokben',
      address: 'Pondok Indah Mall 1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'KFC',
      address: 'Pondok Indah Mall 2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Yoshinoya',
      address: 'Pondok Indah Mall 2',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
    return queryInterface.bulkDelete('Restaurants, null, {}')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
