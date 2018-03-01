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
      name    : 'Hokben',
      address : 'PIM 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name    : 'Kfc',
      address : 'PIM 2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name    : 'Yoshinoya',
      address : 'PIM 2',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
