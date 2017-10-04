const customError = require('./customError')

const hasKeys = ({ keys, obj }) =>
  keys.reduce((prev, cur) => prev && obj[cur], true)

const handleResponse = ({ res, data, error }) => {
  console.log(error)
  if (error) {
    const errorKeys = ['status', 'error', 'description']
    const hasErrorKeys = hasKeys({
      keys: errorKeys,
      obj: error,
    })

    if (hasErrorKeys) {
      res.status(error.status).send(error)
    } else {
      res.status(customError.defaults.response.invalidRequest.status)
        .send(customError.defaults.response.invalidRequest)
    }
  } else {
    res.send(data)
  }
  return Promise.resolve()
}

const createController = ({
  serviceFn,
  serviceParams,
  res,
}) =>
  serviceFn(serviceParams)
    .then(data => handleResponse({ res, data }))
    .catch(error => handleResponse({ res, error }))

module.exports = {
  createController,
  handleResponse,
}
