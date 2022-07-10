'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable('assets', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bike_id: {
      type: Sequelize.BIGINT,
    },
    swap_station_id: {
      type: Sequelize.BIGINT,
    },
    total_dist: {
      type: Sequelize.DOUBLE,
      default: 0.00
    },
    total_power: {
      type: Sequelize.BIGINT,
      default: 0.00
    },
    current_power: {
      type: Sequelize.BIGINT,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
   })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('assets');
  }
};
