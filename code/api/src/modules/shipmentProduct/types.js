// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql'
// import ProductType from '../product/types'

// ShipmentProduct type
const ShipmentProductType = new GraphQLObjectType({
  name: 'shipmentProduct',
  description: 'ShipmentProduct Type',

  fields: () => ({
    id: { type: GraphQLInt },
    shipmentId: { type: GraphQLInt },
    productId: { type: GraphQLInt },
    // product: { type: ProductType },
    returned: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default ShipmentProductType