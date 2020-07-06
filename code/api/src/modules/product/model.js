'use strict'
/* executes code in JavScript strict mode -->
  Makes sure no accidental variable are created
  by throwing an error instead of just creating the
  typo object */
  
/* Similar to Rails model def attributes and relationships for a Product */
// Product
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
  })
}