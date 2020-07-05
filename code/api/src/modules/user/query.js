// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

/* The resolvers and data types have been abstracted to external files and need to be
   imported to use in these queries
 */
// App Imports
import { UserType, UserLoginType, UserGenderType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

// Gets all users in the database
// All
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// Gets a user by ID
// By ID
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

// Finds User with matching email and password
// Auth
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}

// Gets all the Gender options in the database
// Genders
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}
