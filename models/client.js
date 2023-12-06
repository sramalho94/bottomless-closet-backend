'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    borough: DataTypes.STRING,
    service: DataTypes.ARRAY(DataTypes.STRING),
    referralOrg: DataTypes.STRING,
    clothesNeeded: DataTypes.ARRAY(DataTypes.STRING),
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};