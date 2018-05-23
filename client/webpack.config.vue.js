const configs = require('./webpack.config')
const path = require('path')

module.exports = {
  ...configs,
  entry: './index.vue.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vue.bundle.js'
  }
}
