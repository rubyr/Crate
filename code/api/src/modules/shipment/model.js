'use strict'

// Shipment
module.exports = function (sequelize, DataTypes) {
  let Shipment = sequelize.define('shipments', {
    userId: {
      type: DataTypes.INTEGER
    },
    deliveryDate: {
      type: DataTypes.DATE
    },
    crateId: {
      type: DataTypes.INTEGER
    }
  })

  Shipment.associate = function (models) {
    Shipment.belongsTo(models.Crate)
    Shipment.belongsTo(models.User)
    Shipment.belongsToMany(models.Product, {
    through: models.ShipmentProduct })
  }

  return Shipment
}
