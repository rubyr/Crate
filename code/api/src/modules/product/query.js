// Defines which data types will be used for queries
// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

/* The resolvers and data types have been abstracted to external files and need to be
   imported to use in these queries
 */
// App Imports
import { ProductType, ProductTypesType } from './types'
import { getAll, getBySlug, getById, getRelated, getTypes } from './resolvers'

// This creates a GraphQL query for returing all Products
// Products All
export const products = {
  type: new GraphQLList(ProductType),
  resolve: getAll
}

// This creates a GraphQL query for returing a product by slug
// Product By slug
export const product = {
  type: ProductType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// This creates a GraphQL query for returing a product by ID
// Product By ID
export const productById = {
  type: ProductType,
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getById
}

// This creates a GraphQL query for returing related Products
// Doesn't appear that functionality is built out yet
// Products Related
export const productsRelated = {
  type: new GraphQLList(ProductType),
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// This creates a GraphQL query for returing Products of all one type which is Gender association (as defined in the params.json file)
// Product Types
export const productTypes = {
  type: new GraphQLList(ProductTypesType),
  resolve: getTypes
}
