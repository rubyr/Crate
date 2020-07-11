// App Imports
import models from '../../setup/models'

// Get all shipments
export async function getAll() {
  return await models.Shipment.findAll({ order: [['id', 'DESC']] })
}

// Get shipment by ID
export async function getById(parentValue, { shipmentId }) {
  const shipment = await models.Shipment.findOne({ where: { id: shipmentId } })

  if (!shipment) {
    // Shipment does not exists
    throw new Error('The shipment you are looking for does not exists or has been deleted.')
  } else {
    return shipment
  }
}