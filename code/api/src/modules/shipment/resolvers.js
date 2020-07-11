// App Imports
import models from '../../setup/models'

// Get all shipments
export async function getAll() {
  return await models.Shipment.findAll({ order: [['id', 'DESC']] })
}