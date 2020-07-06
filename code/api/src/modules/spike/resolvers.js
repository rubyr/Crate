// App Imports
import models from '../../setup/models'
// import params from '../../config/params'

// Get spike by ID
export async function getById(parentValue, { spikeId }) {
  const spike = await models.Spike.findOne({ where: { id: spikeId } })

  if (!spike) {
    // Spike does not exists
    throw new Error('The spike you are looking for does not exists or has been discontinued.')
  } else {
    return spike
  }
}

// Get all spikes
// export async function getAll(parentValue, { orderBy }) {
//   return await models.Spike.findAll({ order: [['id', orderBy]] })
// }
export async function getAll() {
  return await models.Spike.findAll({ order: [['id', 'DESC']] })
}