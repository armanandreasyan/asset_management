'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "user_address"
      });
    }
  }
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    address: DataTypes.STRING,
    user_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};