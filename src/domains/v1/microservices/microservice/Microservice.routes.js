const express = require('express')
const MicroserviceFactory = require('./Microservice.factory')

const router = express.Router()

const microservice = MicroserviceFactory()

router.post('/v1/microservices', (req, res) =>
  microservice.controller.register({ req, res }))

router.get('/v1/microservices', (req, res) =>
  microservice.controller.get({ req, res }))

router.get('/v1/microservices/:microserviceId', (req, res) =>
  microservice.controller.getById({ req, res }))

module.exports = router
