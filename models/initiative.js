'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Initiative.hasMany(models.Donation, {
        foreignKey: 'initiative_id'
      })
    }
  }
  Initiative.init(
    {
      title: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Initiative',
      tableName: 'initiatives'
    }
  )
  return Initiative
}
