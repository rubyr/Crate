// Imports
import express from 'express'
import path from 'path'
// Allows controlling mutation access to our server
import cors from 'cors'
// Parses and exposes body of HTTP POST request
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
// Logs request details
import morgan from 'morgan'

// App Imports
import { NODE_ENV } from '../config/env'

// Load express modules
export default function (server) {
  console.info('SETUP - Loading modules...')

  // Enable CORS
  server.use(cors())

  // Request body parser
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))

  // Request body cookie parser
  server.use(cookieParser())

  // Static files folder
  server.use(express.static(path.join(__dirname, '..', '..', 'public')))

  // HTTP logger
  if(NODE_ENV === 'development') {
    server.use(morgan('tiny'))
  }
}
