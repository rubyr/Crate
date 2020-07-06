'use strict'
/* executes code in JavScript strict mode -->
  Makes sure no accidental variable are created
  by throwing an error instead of just creating the
  typo object */

/* Looks like Rails joins table creating
  association between User and a Crate */

// Subscription
module.exports = function(sequelize, DataTypes) {
  let Subscription = sequelize.define('subscriptions', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }
  })

  Subscription.associate = function(models) {
    Subscription.belongsTo(models.User)
    Subscription.belongsTo(models.Crate)
  }

  return Subscription
}