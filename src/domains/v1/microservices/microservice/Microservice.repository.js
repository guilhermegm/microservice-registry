const databases = require('../../../../common/databases')

const generateKey = ({ microserviceObj }) =>
  `${microserviceObj.name}_${microserviceObj.env}`

const register = () => ({
  microserviceRegisterObj,
}) =>
  new Promise((resolve, reject) => {
    const redisKey = generateKey({ microserviceObj: microserviceRegisterObj })

    databases.redis.set(redisKey, JSON.stringify(microserviceRegisterObj.toObject()),
      err => (err ? reject(err) : resolve()))
  })

const formatGetResponse = ({ reply }) =>
  (reply && [JSON.parse(reply)]) || []

const formatResponse = ({ reply }) =>
  (reply && JSON.parse(reply)) || null


const get = () => ({
  microserviceGetObj,
}) =>
  new Promise((resolve, reject) => {
    const redisKey = generateKey({ microserviceObj: microserviceGetObj })

    databases.redis.get(redisKey, (err, reply) =>
      (err ? reject(err) : resolve(formatGetResponse({ reply }))))
  })

const getById = () => ({
  schemaObj,
}) =>
  new Promise((resolve, reject) => {
    databases.redis.get(schemaObj.microserviceId, (err, reply) =>
      (err ? reject(err) : resolve(formatResponse({ reply }))))
  })

const microserviceRepository = state => ({
  register: register(state),
  get: get(state),
  getById: getById(state),
})

module.exports = microserviceRepository
