'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('assets', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        type: {
          type: Sequelize.INTEGER,
          validate: {
            min: 1,
            max: 3
          }
        },
        level: {
          type: Sequelize.INTEGER,
          validate: {
            min: 1,
            max: 10
          }
        },
        address: {
          type: Sequelize.STRING,
          references: { model: 'users', key: 'address' }
        }
      });
    }catch (e) {
      console.log(e)
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('assets');
  }
};