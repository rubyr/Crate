// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Shipment type
const ShipmentType = new GraphQLObjectType({
  name: 'shipment',
  description: 'Shipment Type',

  fields: () => ({
    id: { type: GraphQLInt },
    deliveryDate: { type: GraphQLString },
    userId: { type: GraphQLInt },
    crateId: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default ShipmentType