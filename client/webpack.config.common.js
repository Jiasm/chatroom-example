const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = frameKey => {
  return {
    entry: {
      [frameKey]: `./index.${frameKey}.js`
    },
    module: {
      rules: []
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    plugins: [
      new FlowBabelWebpackPlugin({
        warn: true
      }),
      new HtmlWebpackPlugin({
        filename: path.join('../views', `index.${frameKey}.ejs`),
        template: path.join('!!html-loader!./', `index.${frameKey}.ejs`),
        inject: true, // 打包之后的js插入的位置，true/'head'/'body'/false,
        hash: true,
        showErrors: false,
        minify: {
          removeComments: true,
          collapseWhitespace: false
        }
      })
    ],
    devtool: 'sourcemap',
    mode: 'production'
  }
}
