const { YELP_CLIENT_SECRET: secret, YELP_CLIENT_ID: id } = process.env
const request = require('request')

module.exports = {
  stats: {
    colors: true
  },
  proxy: {
    '/yelp': {
      target: 'https://api.yelp.com/v3/graphql',
      secure: false,
      changeOrigin: true,
      ignorePath: true,
      logLevel: 'debug'
    },
    '/auth': {
      logLevel: 'debug',
      target: 'https://api.yelp.com/oauth2/token',
      secure: false,
      changeOrigin: true,
      ignorePath: true
    }
  }
}

