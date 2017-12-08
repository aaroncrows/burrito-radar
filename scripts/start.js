const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
process.env.NODE_ENV = 'development'
const webpackConfig = require('../config/webpack.config.js')
const devServerConfig = require('../config/webpack-dev-server.config.js')

webpackConfig.entry.unshift('webpack-dev-server/client?http://localhost:8080/')
const compiler = webpack(webpackConfig)
const server = new WebpackDevServer(compiler, devServerConfig)
server.listen(8080)
