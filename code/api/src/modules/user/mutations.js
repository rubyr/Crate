// Gives access to GraphQL data types
// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

/* The resolvers and data types have been abstracted to external files and need to be
   imported to use in these mutations
 */
// App Imports
import { UserType } from './types'
import { create, remove } from './resolvers'

// This creates or signs up a User
// Wondering where the password hashing happens
// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}