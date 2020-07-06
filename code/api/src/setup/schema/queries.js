// Imports
import { GraphQLObjectType } from 'graphql'

/* Gathering all queries
  --> NEED TO MODIFY as we add tables/models */
// App Imports
import * as user from '../../modules/user/query'
import * as product from '../../modules/product/query'
import * as crate from '../../modules/crate/query'
import * as subscription from '../../modules/subscription/query'

/* Creates on master mutation variable for all
  NON-modifying-type CRUD functions */

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  fields: () => ({
    ...user,
    ...product,
    ...crate,
    ...subscription
  })
})

export default query