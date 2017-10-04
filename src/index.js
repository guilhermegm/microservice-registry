const app = require('./app')
const settings = require('./app/settings')

app.listen(settings.SERVER_PORT, () => {
  console.log(`todo list RESTful API server started on: ${settings.SERVER_PORT}`)
})
