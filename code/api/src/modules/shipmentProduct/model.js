'use strict'

// ShipmentProduct
module.exports = function (sequelize, DataTypes) {
  let ShipmentProduct = sequelize.define('shipmentProducts', {
    shipmentId: {
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER
    },
    returned: {
      type: DataTypes.BOOLEAN
    }
  })

  ShipmentProduct.associate = function (models) {
    ShipmentProduct.belongsTo(models.Shipment)
    ShipmentProduct.belongsTo(models.Product)
  }

  return ShipmentProduct
}