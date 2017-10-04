const {
  createController,
  handleResponse,
} = require('../../../../common/controllerHelper')

const register = ({ microserviceService }) => ({
  req,
  res,
}) =>
  microserviceService.register({
    microservicePayload: req.body,
  })
    .then(data => handleResponse({ res, data }))
    .catch(error => handleResponse({ res, error }))

const get = ({ microserviceService }) => ({
  req,
  res,
}) =>
  microserviceService.get({
    filters: req.query,
  })
    .then(data => handleResponse({ res, data }))
    .catch(error => handleResponse({ res, error }))

const getById = ({ microserviceService }) => ({
  req,
  res,
}) => createController({
  serviceFn: microserviceService.getById,
  serviceParams: { microserviceId: req.params.microserviceId },
  res,
})

const microserviceController = state => ({
  register: register(state),
  get: get(state),
  getById: getById(state),
})

module.exports = microserviceController
