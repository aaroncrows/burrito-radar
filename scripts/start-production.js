const buildProduction = require('./lib/build-production')

buildProduction(() => {
  require('../')
})
