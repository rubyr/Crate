// This file adds the additional layer of access to modify date with GraphQL
// This defines which GraphQL data types are avaliable for mutations
// Imports
import { GraphQLInt } from 'graphql'

/* The resolvers and data types have been abstracted to external files and need to be
   imported to use in these mutations
 */
// App Imports
import SubscriptionType from './types'
import { create, remove } from './resolvers'

// Create a GraphQL query to create a Subcription
// Subscription create
export const subscriptionCreate = {
  type: SubscriptionType,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Create a GraphQL query to remove a Subcription
// Subscription remove
export const subscriptionRemove = {
  type: SubscriptionType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}