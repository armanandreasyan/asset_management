'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('catalogs', [
      {
        ID: 1,
        name: "Catalog Name1",
        description: "Description1",
        url: "url1",
        cost1: 102,
        cost2: 89,
        cost3: 55,
        req1: 10,
        req2: 8,
        req3: 7,
        category: 1
      },
      {
        ID: 2,
        name: "Catalog Name2",
        description: "Description2",
        url: "url2",
        cost1: 111,
        cost2: 108,
        cost3: 99,
        req1: 9,
        req2: 8,
        req3: 6,
        category: 2
      },
      {
        ID: 3,
        name: "Catalog Name3",
        description: "Description3",
        url: "url3",
        cost1: 45,
        cost2: 76,
        cost3: 63,
        req1: 5,
        req2: 4,
        req3: 7,
        category: 3
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('catalogs', null, {});
  }
};
