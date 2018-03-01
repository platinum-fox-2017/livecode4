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
      name: 'Hokben',
      address: 'Pondok Indah Mall 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'KFC',
      address: 'Pondok Indah Mall 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Yoshinoya',
      address: 'Gandaria City',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
