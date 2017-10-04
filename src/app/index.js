const express = require('express')
const path = require('path')
const glob = require('glob')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const healthCheckEndpoint = require('health-check-endpoint')
const packageJson = require('../../package.json')

const app = express()

app.disable('x-powered-by')
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

healthCheckEndpoint(app)({ version: packageJson.version })

const loadRoutes = () => {
  const routesPath = path.join(
    __dirname,
    '..',
    'domains',
    '**',
    '**',
    '**',
    '*.routes.js',
  )

  glob(routesPath, (er, files) => {
    files.forEach((filePath) => {
      app.use('/', require(filePath)) // eslint-disable-line
    })
  })
}

loadRoutes()

module.exports = app
