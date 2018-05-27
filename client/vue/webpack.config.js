const options = {
  rules: [
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'flow'],
            plugins: [
              'transform-vue-jsx',
              'syntax-jsx',
              'transform-flow-strip-types'
            ]
          }
        }
      ]
    },
    {
      test: /\.(vue)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'vue-loader',
          options: {
            presets: ['env', 'flow'],
            plugins: [
              'transform-vue-jsx',
              'syntax-jsx',
              'transform-flow-strip-types'
            ]
          }
        }
      ]
    }
  ],
  plugins: [new VueLoaderPlugin()]
}

module.exports = require('../common/webpack.config')('vue', options)
