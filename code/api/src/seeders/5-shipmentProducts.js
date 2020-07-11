'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('shipmentProducts', [
      {
        shipmentId: 1,
        productId: 4,
        returned: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        shipmentId: 1,
        productId: 2,
        returned: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        shipmentId: 2,
        productId: 5,
        returned: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        shipmentId: 2,
        productId: 6,
        returned: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('shipmentProducts', null, {});
  }
}