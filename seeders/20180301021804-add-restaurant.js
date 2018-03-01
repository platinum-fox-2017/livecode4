'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Restaurants', [
      {
        name: 'Hanamasa',
        address: 'suatu jalan di jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'KFC',
        address: 'suatu jalan di bogor',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'MCD',
        address: 'suatu jalan di bandung',
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
    */
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
