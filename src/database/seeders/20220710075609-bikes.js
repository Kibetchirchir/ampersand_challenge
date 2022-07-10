'use strict';

const data = require('../seeders-data/default_bikes.js');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bikes', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bikes', null, {});
  }
};
