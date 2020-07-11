// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/query'
import * as product from '../../modules/product/query'
import * as crate from '../../modules/crate/query'
import * as subscription from '../../modules/subscription/query'
import * as shipment from '../../modules/shipment/query'
import * as shipmentProduct from '../../modules/shipmentProduct/query'

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  fields: () => ({
    ...user,
    ...product,
    ...crate,
    ...subscription,
    ...shipment,
    ...shipmentProduct
  })
})

export default query