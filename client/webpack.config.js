const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    react: './index.react.js',
    vue: './index.vue.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  }
}
