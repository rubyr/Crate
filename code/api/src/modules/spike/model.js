'use strict'

// Spike
module.exports = function (sequelize, DataTypes) {
  let Spike = sequelize.define('spikes', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    zodiac: {
      type: DataTypes.STRING
    }
  })

  return Spike
}