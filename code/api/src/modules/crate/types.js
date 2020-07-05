// Allowing access to defined GraphQL data types
// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Defining the attributes of a Crate and gives access to a GraphQL object for queries and mutations
// Kind of like a GraphQL model
// Crate type
const CrateType = new GraphQLObjectType({
  name: 'crate',
  description: 'Crate Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default CrateType