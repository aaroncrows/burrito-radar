const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [path.resolve(__dirname, '../src/app.js')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../src/app.js')
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../src/index.html')})
  ]
}
