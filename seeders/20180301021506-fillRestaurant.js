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
    return queryInterface.bulkInsert('Restaurants',[{
      name: 'Masakan Padang',
      address: 'Jalan Kuliner No.931',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name: 'Masakan Sunda',
      address: 'Jalan Kuliner No.6613',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name: 'Restoran Mie',
      address: 'Jalan KulinerAtauBukan No.35',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {})
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
