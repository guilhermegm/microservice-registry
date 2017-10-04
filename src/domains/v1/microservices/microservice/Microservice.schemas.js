const SchemaObject = require('schema-object')

const MicroserviceRegisterSchema = new SchemaObject({
  name: { type: String, required: true },
  env: { type: String, required: true },
  url: { type: String, required: true },
  version: { type: String, required: true },
})

const MicroserviceGetSchema = new SchemaObject({
  name: { type: String, required: true },
  env: { type: String, required: true },
})

const MicroserviceGetByIdSchema = new SchemaObject({
  microserviceId: { type: String, required: true },
})

module.exports = {
  MicroserviceGetSchema,
  MicroserviceRegisterSchema,
  MicroserviceGetByIdSchema,
}
