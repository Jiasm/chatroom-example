const options = {
  rules: [
    {
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      enforce: 'pre',
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['flow'],
            plugins: ['syntax-jsx', 'transform-flow-strip-types']
          }
        }
      ]
    },
    {
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-react-jsx']
          }
        }
      ]
    }
  ],
  plugins: []
}

module.exports = require('../common/webpack.config')('react', options)
