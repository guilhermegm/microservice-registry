const redis = require('redis')

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  password: 'redis',
  detect_buffers: true,
})

module.exports = client
