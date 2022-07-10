'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('swaps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      asset_id_returned: {
        type: Sequelize.STRING,
        allowNull: false
      },
      asset_id_taken: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id: {
        type: Sequelize.BIGINT,
      },
      bike_id: {
        type: Sequelize.BIGINT,
      },
      power_remaining: {
        type: Sequelize.DOUBLE,
      },
      power_used: {
        type: Sequelize.DOUBLE,
      },
      cost: {
        type: Sequelize.DOUBLE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('swaps')
  }
};
