// This give access to the defined data types
// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

/* The resolvers and data types have been abstracted to external files and need to be
   imported to use in these mutations
 */
// App Imports
import { UserType } from '../user/types'
import CrateType from '../crate/types'

// Defining the attributes of a Subscription and gives access to a GraphQL object for queries and mutations
// Kind of like a GraphQL model
// Subscription type
const SubscriptionType = new GraphQLObjectType({
  name: 'subscription',
  description: 'Subscription Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    crate: { type: CrateType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default SubscriptionType