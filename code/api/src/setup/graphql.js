// Imports
import graphqlHTTP from 'express-graphql'

// All of this information has been abstracted to the files below and need to be imported
// App Imports
import serverConfig from '../config/server.json'
import authentication from './authentication'
import schema from './schema'

// Setup and configuration information for GraphQL
// Setup GraphQL
export default function (server) {
  console.info('SETUP - GraphQL...')

  server.use(authentication)

  // API (GraphQL on route `/`)
  server.use(serverConfig.graphql.endpoint, graphqlHTTP(request => ({
    schema,
    graphiql: serverConfig.graphql.ide,
    pretty: serverConfig.graphql.pretty,
    context: {
      auth: {
        user: request.user,
        isAuthenticated: request.user && request.user.id > 0
      }
    }
  })))
}
