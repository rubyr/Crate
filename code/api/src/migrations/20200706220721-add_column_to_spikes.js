'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'spikes',
      'zodiac',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('spikes', 'zodiac')
  }
};
