'use strict';

const data = require('../seeders-data/default-swap-stations');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('swap_stations', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('swap_stations', null, {});
  }
};
