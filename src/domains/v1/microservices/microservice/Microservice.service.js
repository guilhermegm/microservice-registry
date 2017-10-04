const {
  MicroserviceGetSchema,
  MicroserviceGetByIdSchema,
  MicroserviceRegisterSchema,
} = require('./Microservice.schemas')
const customError = require('../../../../common/customError')

const register = ({ microserviceRepository }) => ({
  microservicePayload,
}) => {
  const microserviceRegisterObj = new MicroserviceRegisterSchema(microservicePayload)

  if (microserviceRegisterObj.isErrors()) {
    return Promise.reject()
  }

  return microserviceRepository.register({ microserviceRegisterObj })
}

const envelopeResponse = items => ({ data: items })

const formatGetResponse = ({ items, ResponseSchema }) => {
  const formattedData = items.map(item =>
    (new ResponseSchema(item)).toObject())

  return envelopeResponse({ items: formattedData })
}

const get = ({ microserviceRepository }) => ({
  filters,
}) => {
  const microserviceGetObj = new MicroserviceGetSchema(filters)

  if (microserviceGetObj.isErrors()) {
    return Promise.reject()
  }

  return microserviceRepository.get({ microserviceGetObj })
    .then(items => formatGetResponse({
      items,
      ResponseSchema: MicroserviceRegisterSchema,
    }))
}

const createService = ({
  repositoryFn,
  repositoryParams,
  Schema,
  formatResponseFn,
}) => {
  const schemaObj = new Schema(repositoryParams)

  if (schemaObj.isErrors()) {
    return Promise.reject()
  }

  return repositoryFn({ schemaObj })
    .then(formatResponseFn)
}

const getById = ({ microserviceRepository }) => ({
  microserviceId,
}) => createService({
  repositoryFn: microserviceRepository.getById,
  repositoryParams: { microserviceId },
  Schema: MicroserviceGetByIdSchema,
  formatResponseFn: (item) => {
    if (item) {
      return envelopeResponse(item)
    }

    return Promise.reject(customError.defaults.response.notFound)
  },
})

const microserviceService = state => ({
  register: register(state),
  get: get(state),
  getById: getById(state),
})

module.exports = microserviceService
