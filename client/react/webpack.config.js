const options = {
  rules: [
    {
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['flow', 'env'],
            plugins: [
              'syntax-jsx',
              'transform-react-jsx',
              'transform-flow-strip-types'
            ]
          }
        }
      ]
    }
  ],
  plugins: []
}

module.exports = require('../common/webpack.config')('react', options)
