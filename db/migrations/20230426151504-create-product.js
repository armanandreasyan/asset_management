'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('products', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        address: {
          allowNull: false,
          type: Sequelize.STRING,
          primaryKey: true
        },
        user_address: {
          type: Sequelize.STRING,
          references: { model: 'users', key: 'address' }
        },
      });
    }catch (e) {
      console.log(e);
    }

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};