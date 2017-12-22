const webpack = require('webpack')

const buildProduction = fn => {
  process.env.NODE_ENV = 'production'

  const webpackConfig = require('../../config/webpack.config.js')

  webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.error(err.stack || err)
      if (err.details) {
        console.error(err.details)
      }
      return
    }

    const info = stats.toJson()

    if (stats.hasErrors()) console.error(info.errors)
    if (stats.hasWarnings()) console.warn(info.warnings)

    console.log(stats.toString({
      colors: true,
      chunks: false
    }))

    fn && fn()
  })
}

module.exports = buildProduction
