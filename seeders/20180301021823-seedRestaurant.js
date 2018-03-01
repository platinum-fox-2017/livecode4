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
  //   return queryInterface.bulkInsert('Restaurants', [{
  //       name:"Classroom",
  //       address:"Jalan Kalimantan No 13",
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //   },{
  //       name:"Eatboss",
  //       address:"Jalan Dago No 343",
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //   },{
  //       name:"Warung Paste",
  //       address:"Jalan Ganeca No 3",
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //   }])
  // },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
