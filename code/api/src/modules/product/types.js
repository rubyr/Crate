// Defines which data types can be used in this file
// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Creating a GraphQL type and defining the attributes and data types
// Kind of like a GraphQL model
// Product type
const ProductType = new GraphQLObjectType({
  name: 'product',
  description: 'Product Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    type: { type: GraphQLInt },
    gender: { type: GraphQLInt },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// This is creating an association of the user Gender as a type of product
// Allows for a query to return all Male or Female products
// Seems unnecessary and redundant
// Using type here is confusing
// User Gender type
const ProductTypesType = new GraphQLObjectType({
  name: 'productTypesType',
  description: 'User Types Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

export { ProductType, ProductTypesType }