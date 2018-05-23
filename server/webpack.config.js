const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin')
const path = require('path')
const fs = require('fs')

const nodeModules = {}
fs.existsSync('node_modules') &&
  fs
    .readdirSync('node_modules')
    .filter(function(x) {
      return ['.bin'].indexOf(x) === -1
    })
    .forEach(function(mod) {
      nodeModules[mod] = 'commonjs ' + mod
    })

module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, '../'),
    filename: 'server.js'
  },
  node: {
    __filename: false,
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: nodeModules,
  plugins: [
    new FlowBabelWebpackPlugin({
      warn: true
    })
  ],
  devtool: 'sourcemap',
  mode: 'production',
  optimization: {
    minimize: false
  }
}
