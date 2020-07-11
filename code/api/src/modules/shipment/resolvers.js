// App Imports
import models from '../../setup/models'

// Get all shipments
export async function getAll() {
  return await models.Shipment.findAll({ order: [['id', 'DESC']] })
}

// Get shipment by ID
export async function getById(parentValue, { id }) {
  return await models.Shipment.findOne({
    where: { id },
    include: [
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Get shipments by user
export async function getByUser(parentValue, { }, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.Shipment.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        { model: models.Crate, as: 'crate' },
      ]
    })
  } else {
    throw new Error('Please login to view your shipments.')
  }
}