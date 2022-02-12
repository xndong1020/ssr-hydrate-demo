const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

config = {
  entry: './client/src/index.tsx',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'eval-source-map',
  // In webpack 5 automatic node.js polyfills are removed. hence you will get an error 'process is not defined'
  // solution is to install 'yarn add -D process', then use below ProvidePlugin to frontend
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new webpack.EnvironmentPlugin({
      __isBrowser__: 'true'
    })
  ]
}

module.exports = merge(common, config)
