/* Defines which datatypes are available to GraphQL */
// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

/* CRUD type methods called */
// App Imports
import CrateType from './types'
import { create, remove, update } from './resolvers'

/* creates new CRATE */
// Crate create
export const crateCreate = {
  type: CrateType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: create
}

/* updates a CRATE by its id */
// Crate update
export const crateUpdate = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}

/* deletes a CRATE by id */
// Crate remove
export const crateRemove = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}