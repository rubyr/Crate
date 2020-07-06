// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import SpikeType from './types'
import { getAll, getById } from './resolvers'

// Crates All
export const spikes = {
  type: new GraphQLList(SpikeType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// Crate By ID
export const spikeById = {
  type: SpikeType,
  args: {
    spikeId: { type: GraphQLInt }
  },
  resolve: getById
}