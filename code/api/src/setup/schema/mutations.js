// Imports
import { GraphQLObjectType } from 'graphql'

/* Gathering all mutations
  --> NEED TO MODIFY as we add tables/models */

// App Imports
import * as user from '../../modules/user/mutations'
import * as product from '../../modules/product/mutations'
import * as crate from '../../modules/crate/mutations'
import * as subscription from '../../modules/subscription/mutations'

/* Creates on master mutation variable for all
  modifying-type CRUD functions */

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',
/* ... is a JS spreader operation */
  fields: {
    ...user,
    ...product,
    ...crate,
    ...subscription
  }
})

export default mutation
