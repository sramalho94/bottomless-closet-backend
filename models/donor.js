'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Donor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Donors.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Donor',
      tableName: 'donors'
    }
  )
  return donors
}
