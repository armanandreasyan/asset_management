'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('catalogs', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100)
      },
      description: {
        type: Sequelize.STRING(255)
      },
      url: {
        type: Sequelize.STRING(255)
      },
      cost1: {
        type: Sequelize.INTEGER
      },
      cost2: {
        type: Sequelize.INTEGER
      },
      cost3: {
        type: Sequelize.INTEGER
      },
      req1: {
        type: Sequelize.INTEGER
      },
      req2: {
        type: Sequelize.INTEGER
      },
      req3: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('catalogs');
  }
};