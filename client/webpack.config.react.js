const configs = require('./webpack.config')
const path = require('path')

module.exports = {
  ...configs,
  entry: './index.react.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'react.bundle.js'
  }
}
