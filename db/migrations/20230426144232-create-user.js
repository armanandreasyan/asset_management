'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      address: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      cash1: {
        type: Sequelize.FLOAT
      },
      cash2: {
        type: Sequelize.FLOAT
      },
      cash3: {
        type: Sequelize.FLOAT
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};