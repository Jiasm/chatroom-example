const webpack = require('webpack')
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
  entry: './index.babel.js',
  target: 'node',
  output: {
    path: __dirname,
    filename: 'index.js'
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
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  externals: nodeModules,
  plugins: [
    new FlowBabelWebpackPlugin({
      warn: true
    }),
    new webpack.IgnorePlugin(
      /(atpl|bracket|dot|doT.js|dust|dustjs-linkedin|eco|ect|ejs|haml|haml-coffee|hamlet|hiredis|handlebars|hogan|htmling|jade|jazz|jqtpl|just|liquor|lodash|marko|mote|mustache|nunjucks|plates|pug|QEJS|ractive|react|slm|swig|swig|teacup|templayed|twig|liquid|toffee|underscore|vash|walrus|whiskers)/
    )
  ],
  devtool: 'sourcemap',
  mode: 'production',
  optimization: {
    minimize: false
  }
}
