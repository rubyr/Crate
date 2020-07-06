// This file is defining and setting up the GraphQL schema
// Imports
import { GraphQLSchema } from 'graphql'

// The specifics up the queries and mutations are abstracted to the files below
// App Imports
import query from './queries'
import mutation from './mutations'

// Schema
const schema = new GraphQLSchema({
  query,
  mutation
})

export default schema
