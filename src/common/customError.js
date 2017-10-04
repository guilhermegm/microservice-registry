const enumHelper = require('./enumHelper')

const customError = {
  defaults: {
    response: {
      invalidRequest: {
        status: enumHelper.httpStatusCode.badRequest.value,
        error: 'INVALID_REQUEST',
        description: 'Invalid request',
      },
      notFound: {
        status: enumHelper.httpStatusCode.notFound.value,
        error: 'NOT_FOUND',
        description: 'Not found',
      },
    },
  },

  microservices: {
    authentication: {
      noPassword: {
        status: enumHelper.httpStatusCode.badRequest.value,
        error: 'NO_PASSWORD',
        description: 'No password found',
      },
    },
  },
}

module.exports = customError
