// This file adds the additional layer of access to modify date with GraphQL
// This defines which GraphQL data types are avaliable for mutations
// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

/* The resolvers and data types have been abstracted to external files and need to be
   imported to use in these mutations
 */
// App Imports
import CrateType from './types'
import { create, remove, update } from './resolvers'

/* This give the ability to create Crates with a GraphQL query
   It appears that there are no field requirements for creation.
*/
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

// This give the ability to update Crates with a GraphQL query
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

// This allows a crate to be deleted with a GraphQL query
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