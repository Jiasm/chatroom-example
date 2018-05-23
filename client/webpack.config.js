const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin')
const path = require('path')

module.exports = {
  module: {
    rules: []
  },
  plugins: [
    new FlowBabelWebpackPlugin({
      warn: true
    })
  ],
  devtool: 'sourcemap',
  mode: 'production'
}
