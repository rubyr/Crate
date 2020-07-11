// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import CrateType from '../crate/types'

// Shipment type
const ShipmentType = new GraphQLObjectType({
  name: 'shipment',
  description: 'Shipment Type',

  fields: () => ({
    id: { type: GraphQLInt },
    deliveryDate: { type: GraphQLString },
    userId: { type: GraphQLInt },
    crate: { type: CrateType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default ShipmentType