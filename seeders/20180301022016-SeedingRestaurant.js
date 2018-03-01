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
       name: 'Rocky',
       address: 'Jalan U, depan BINUS Syahdan',
       createdAt: new Date,
       updatedAt: new Date},
       {
       name: 'Super Sambal',
       address: 'GreenVille',
       createdAt: new Date,
       updatedAt: new Date},
       {
       name: 'Kintan Buffet',
       address: 'Central Park Mall',
       createdAt: new Date,
       updatedAt: new Date}
   ])
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
