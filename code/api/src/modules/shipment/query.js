// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import ShipmentType from './types'
// import { getAll, getById } from './resolvers'
import { getAll, getByUser, getById } from './resolvers'

// Shipments All
export const shipments = {
  type: new GraphQLList(ShipmentType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// Shipment By ID
export const shipmentById = {
  type: ShipmentType,
  args: {
    shipmentId: { type: GraphQLInt }
  },
  resolve: getById
}

// Shipments By User
export const shipmentsByUser = {
  type: new GraphQLList(ShipmentType),
  resolve: getByUser
}

