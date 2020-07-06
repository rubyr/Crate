// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Crate type
const SpikeType = new GraphQLObjectType({
  name: 'spike',
  description: 'Spike Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    zodiac: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default SpikeType