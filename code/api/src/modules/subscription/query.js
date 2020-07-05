// Defines which GraphQL data types can be used
// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

/* The resolvers and data types have been abstracted to external files and need to be
   imported to use in these mutations
 */
// App Imports
import SubscriptionType from './types'
import { getAll, getByUser, get } from './resolvers'

// Creates a GraphQL query to retrieve all subscriptions
// Subscriptions All
export const subscriptions = {
  type: new GraphQLList(SubscriptionType),
  resolve: getAll
}

// Creates a GraphQL query to retrieve all subscriptions by user
// Subscriptions by user
export const subscriptionsByUser = {
  type: new GraphQLList(SubscriptionType),
  resolve: getByUser
}

// Creates a GraphQL query to a subscription by ID
// Subscription By id
export const subscription = {
  type: SubscriptionType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}