'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        address: "address1, New York",
        cash1: 150.5,
        cash2: 100.22,
        cash3: 30.11
      },
      {
        address: "address2, New York",
        cash1: 1500.5,
        cash2: 190.72,
        cash3: 300.31
      },
      {
        address: "address3, New York",
        cash1: 13.5,
        cash2: 801.47,
        cash3: 206.78
      },
      {
        address: "address4, New York",
        cash1: 780.15,
        cash2: 280.76,
        cash3: 3.11
      },
      {
        address: "address5, New York",
        cash1: 439.58,
        cash2: 79.22,
        cash3: 306
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
