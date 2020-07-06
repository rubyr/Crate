'use strict'
/* executes code in JavScript strict mode -->
  Makes sure no accidental variable are created
  by throwing an error instead of just creating the
  typo object */

/* Looks similar to Rails model with attribute and datatype */
module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })
/* CRATE has many SUBSCRIPTIONS association */
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}