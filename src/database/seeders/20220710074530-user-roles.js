'use strict';

const data = require('../seeders-data/default-users-roles.js');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users-roles', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users-roles', null, {});
  }
};
