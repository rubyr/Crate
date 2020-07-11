// App Imports
import models from '../../setup/models'

// Get all shipmentProducts
export async function getAll() {
  return await models.ShipmentProduct.findAll({ order: [['id', 'DESC']] })
}

// Get shipmentProduct by ID
export async function getById(parentValue, { shipmentProductId }) {
  const shipmentProduct = await models.ShipmentProduct.findOne({ where: { id: shipmentProductId } })

  if (!shipmentProduct) {
    // shipmentProduct does not exists
    throw new Error('The shipmentProduct you are looking for does not exists or has been deleted.')
  } else {
    return shipmentProduct
  }
}