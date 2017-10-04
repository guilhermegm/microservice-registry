const microserviceRepositoryFn = require('./Microservice.repository')
const microserviceServiceFn = require('./Microservice.service')
const microserviceControllerFn = require('./Microservice.controller')

const MicroserviceFactory = () => {
  const microserviceRepository = microserviceRepositoryFn()
  const microserviceService = microserviceServiceFn({ microserviceRepository })
  const microserviceController = microserviceControllerFn({ microserviceService })

  return Object.assign(
    {},
    { repository: microserviceRepository },
    { service: microserviceService },
    { controller: microserviceController },
  )
}

module.exports = MicroserviceFactory
