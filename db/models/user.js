'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      this.hasMany(models.Product, {
        onDelete: "cascade",
        foreignKey: "user_address"
      });
      this.hasMany(models.Asset, {
        onDelete: "cascade",
        foreignKey: "address"
      });
    }
  }
  User.init({
    address: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    cash1: {
      type: DataTypes.FLOAT
    },
    cash2: {
      type: DataTypes.FLOAT
    },
    cash3: {
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
  });
  return User;
};