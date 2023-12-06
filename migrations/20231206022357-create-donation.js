'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('donations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      donor_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'donors', key: 'id' },
        allowNull: false,
      },
      initiative_id: {
        type: Sequelize.INTEGER,
      },
      donationType: {
        type: Sequelize.STRING,
      },
      donationValue: {
        type: Sequelize.INTEGER,
      },
      inMemoriam: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.STRING,
      },
      orgMatchName: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('donations')
  },
}
