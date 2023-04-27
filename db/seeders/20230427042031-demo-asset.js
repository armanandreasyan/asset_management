'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('assets', [
      {
        id: 1,
        type: 2,
        level: 8,
        address: "address2, New York"
      },
      {
        id: 2,
        type: 1,
        level: 10,
        address: "address1, New York"
      },
      {
        id: 3,
        type: 1,
        level: 5,
        address: "address5, New York"
      },
      {
        id: 4,
        type: 3,
        level: 7,
        address: "address2, New York"
      },
      {
        id: 5,
        type: 2,
        level: 1,
        address: "address3, New York"
      },
      {
        id: 6,
        type: 3,
        level: 6,
        address: "address4, New York"
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('assets', null, {});
  }
};
