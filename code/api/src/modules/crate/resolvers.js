/* This block pulls in access to the database through the models file and
   uses the params file for authorization when creating, updating, and deleting.
   Connecting to the database in the model file may reduce db hits?
*/
// App Imports
import models from '../../setup/models'
import params from '../../config/params'

// Is the retrieval action for getting a crate by ID with error handling
// Get crate by ID
export async function getById(parentValue, { crateId }) {
  const crate = await models.Crate.findOne({ where: { id: crateId } })

  if (!crate) {
    // Crate does not exists
    throw new Error('The crate you are looking for does not exists or has been discontinued.')
  } else {
    return crate
  }
}

// Is the retrieval action for getting all crates
// Get all crates
export async function getAll(parentValue, { orderBy }) {
  return await models.Crate.findAll({ order: [['id', orderBy]] })
}

// This is the action for creating a crate that only is authorized if the user is an admin
// Create crate
export async function create(parentValue, { name, description }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.create({
      name,
      description
    })
  } else {
    throw new Error('Operation denied.')
  }
}

// This is the action for updateing a crate that only is authorized if the user is an admin
// Update crate
export async function update(parentValue, { id, name, description }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.update(
      {
        name,
        description
      },
      {where: {id}}
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// This is the action for deleting a crate that only is authorized if the user is an admin
// Delete crate
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.destroy({where: {id}})
  } else {
    throw new Error('Operation denied.')
  }
}

// The authorization logic is repeated 3 times and could be made into a helper method