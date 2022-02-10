const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const config = {
  // we don't need 'target': 'node' like the webpack.server.js does, because the client.js is targeting browsers
  entry: './client/src/index.js',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public')
  },
  // Webpack doesn't know to resolve .jsx files implicitly.
  // You can specify a file extension in your app (const Home = require('./client/components/Home.jsx').default).
  // or include .jsx in the extensions that webpack should resolve without explicit declaration
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = merge(commonConfig, config)