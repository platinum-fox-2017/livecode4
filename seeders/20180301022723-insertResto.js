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
          name: 'Raos Pisan Resto',
          address: 'Jl. Buah Batu Bandung',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: 'Serba Enak Resto',
          address: 'Jl. Kiaracondong Bandung',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: 'Warunk Betawi',
          address: 'Jl. Kebayoran Lama Jakarta',
          createdAt: new Date(),
          updatedAt: new Date()
        }])
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
