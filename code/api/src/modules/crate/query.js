// This gives access to the defined GraphQL data types
// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

/* The resolvers and data types have been extracted to external files and need to be
   imported to use in these queries
 */
// App Imports
import CrateType from './types'
import { getAll, getById } from './resolvers'

// This creates a GraphQL query to return all of the crates
// Crates All
export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// This creates a GraphQL query to reuturn one crate with an ID argument
// Crate By ID
export const crateById = {
  type: CrateType,
  args: {
    crateId: { type: GraphQLInt }
  },
  resolve: getById
}
