const webpack = require('webpack')
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = (frameKey, options = {}) => {
  let isReact = frameKey === 'react'
  return {
    entry: {
      [frameKey]: path.resolve(__dirname, `../${frameKey}/index.js`)
    },
    resolve: {
      extensions: [
        '.js',
        isReact ? '.jsx' : '.vue',
        '.css',
        '.scss',
        '.gif',
        '.png',
        '.jpeg',
        '.svg'
      ]
    },
    module: {
      rules: options.rules.concat([
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader'
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [require('autoprefixer')()]
                }
              }
            ]
          })
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                publicPath: '/'
              }
            }
          ]
        }
      ])
    },
    output: {
      path: path.resolve(__dirname, '../../dist'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    plugins: options.plugins.concat([
      new FlowBabelWebpackPlugin({
        warn: true
      }),
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, '../../views', `${frameKey}.ejs`),
        template:
          '!!html-loader!' +
          path.relative(
            process.cwd(),
            path.resolve(__dirname, `../${frameKey}/index.ejs`)
          ),
        inject: true, // 打包之后的js插入的位置，true/'head'/'body'/false,
        hash: true,
        showErrors: false,
        minify: {
          removeComments: true,
          collapseWhitespace: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"'
        }
      })
    ]),
    devtool: 'sourcemap',
    mode: 'production'
  }
}
