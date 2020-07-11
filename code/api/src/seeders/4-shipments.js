'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('shipments', [
      {
        userId: 2,
        deliveryDate: '2020-07-08 18:28:57.654-06',
        crateId: 3,// mens accessories
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        deliveryDate: '2020-06-08 18:28:57.654-06',
        crateId: 2,// womens clothes
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        deliveryDate: '2040-07-08 18:28:57.654-06',
        crateId: 1,// mens clothes
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        deliveryDate: '2040-06-08 18:28:57.654-06',
        crateId: 4,// womens accessories
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('shipments', null, {});
  }
}