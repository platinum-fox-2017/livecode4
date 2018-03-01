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

    return queryInterface.bulkInsert('restaurants', [{
      nama: 'hokben',
      address: 'imogiri barat',
      createdAt:new Date(),
      updatedAt: new Date()
    },
  {
    nama: 'kfc',
    address: 'pondok pinang',
    createdAt:new Date(),
    updatedAt: new Date()
  },
  {
    nama: 'mcd',
    address: 'pondok indah',
    createdAt:new Date(),
    updatedAt: new Date()
  },
  {
    nama: 'cfc',
    address: 'veteran',
    createdAt:new Date(),
    updatedAt: new Date()
  },
  {
    nama: 'SS',
    address: 'janturan',
    createdAt:new Date(),
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
