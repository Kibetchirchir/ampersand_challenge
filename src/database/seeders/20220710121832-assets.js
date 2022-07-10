'use strict';

const data = require('../seeders-data/default-assets');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('assets', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('assets', null, {});
  }
};
