'use strict'
/* executes code in JavScript strict mode -->
  Makes sure no accidental variable are created
  by throwing an error instead of just creating the
  typo object */ 

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    /* Sequelize --> promised-based Node.js ORM for Postgres */
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}