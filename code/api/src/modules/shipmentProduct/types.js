// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql'

// ShipmentProduct type
const ShipmentProductType = new GraphQLObjectType({
  name: 'shipmentProduct',
  description: 'ShipmentProduct Type',

  fields: () => ({
    id: { type: GraphQLInt },
    shipmentId: { type: GraphQLInt },
    productId: { type: GraphQLInt },
    returned: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default ShipmentProductType