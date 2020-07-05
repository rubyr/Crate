// Give access to bcrypy and jwt modules
// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
/* This block pulls in access to the database through the models file and
   uses the params file for authorization when creating, updating, and deleting.
   Also, give access to server config file for password handling.
   Connecting to the database in the model file may reduce db hits?
*/
// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// Action that creates a new user. Checks if email already exists. Checks if passwords match.
// It is using built in bcrypt methods to handle the password
// Create
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    // This creates the hashed password for the database
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
  } else {
    // User exists
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}

// Action that logs in an existing user if the email and password matches.
export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Finds the User in the database with the matching ID
// Get by ID
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
}

// Finds all the Users in the database
// Get all
export async function getAll() {
  return await models.User.findAll()
}

// Finds and deletes a User based on ID
// Interesting that this doesn't have any authorization
// Delete
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}

// Gets all the genders from the params.json file
// User genders
export async function getGenders() {
  return Object.values(params.user.gender)
}
