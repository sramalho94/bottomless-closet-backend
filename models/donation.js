'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Donation.belongsTo(models.Donor, {
        foreignKey: 'donor_id',
        onDelete: 'CASCADE'
      })
      Donation.belongsTo(models.Initiative, {
        foreignKey: 'initiative_id',
        onDelete: 'SET NULL'
      })
    }
  }
  Donation.init(
    {
      donor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'donors', key: 'id' }
      },
      initiative_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'initiatives', key: 'id' }
      },
      donationType: DataTypes.STRING,
      donationValue: DataTypes.INTEGER,
      inMemoriam: DataTypes.STRING,
      comment: DataTypes.STRING,
      orgMatchName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Donation',
      tableName: 'donations'
    }
  )
  return Donation
}
