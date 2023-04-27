'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Catalog extends Model {

    static associate(models) {

    }
  }
  Catalog.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    url: {
      //allowNull: false,
      type: DataTypes.STRING
    },
    cost1: {
      //allowNull: false,
      type: DataTypes.INTEGER
    },
    cost2: {
      //allowNull: false,
      type: DataTypes.INTEGER
    },
    cost3: {
      //allowNull: false,
      type: DataTypes.INTEGER
    },
    req1: {
      //allowNull: false,
      type: DataTypes.INTEGER
    },
    req2: {
      //allowNull: false,
      type: DataTypes.INTEGER
    },
    req3: {
      type: DataTypes.INTEGER
    },
    category: {
      // allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Catalog',
    tableName: 'catalogs',
    timestamps: false
  });
  return Catalog;
};