// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import ShipmentProductType from './types'
import { getAll, getById } from './resolvers'

// shipmentProducts All
export const shipmentProducts = {
  type: new GraphQLList(ShipmentProductType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// shipmentProduct By ID
export const shipmentProductById = {
  type: ShipmentProductType,
  args: {
    shipmentProductId: { type: GraphQLInt }
  },
  resolve: getById
}