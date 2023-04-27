'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "address"
      });
    }
  }
  Asset.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM(
          [1, 2, 3]
      )
    },
    level: {
      type: DataTypes.ENUM(
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      )
    },
    address: {
      foreignKey: true,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Asset',
    tableName: 'assets',
    timestamps: false
  });
  return Asset;
};