/* This file is used to trigger and setup all the required modules for the app to run. It is triggered by
package.json when using npm
*/ 

// Imports
// Makes express module available to the whole app
import express from 'express'

// App Imports
/* This block triggers multiple setup files and starts the server.
   It allows the methods below to be ran.
*/
import setupLoadModules from './setup/load-modules'
import setupGraphQL from './setup/graphql'
import setupUpload from './setup/upload'
import setupStartServer from './setup/start-server'

// Create express server
const server = express()

// Setup load modules
setupLoadModules(server)

// Setup uploads
setupUpload(server)

// Setup GraphQL
setupGraphQL(server)

// Start server
setupStartServer(server)
