// This is defining which data types are used
// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Defining the attributes of a User and gives access to a GraphQL object for queries and mutations
// Kind of like a GraphQL model
// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// Defining the attributes of a Login and gives access to a GraphQL object for queries and mutations
// There are two seperate Types for creating a User and an existing User login
// Kind of like a GraphQL model
// User Login type
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

// User Gender type
const UserGenderType = new GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

export { UserType, UserLoginType, UserGenderType }