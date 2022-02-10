const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const webpackNodeExternals = require('webpack-node-externals')

const config = {
  target: 'node',
  entry: './server/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // to tell webpack not to bundle any libraries into our output bundle
  externals: [webpackNodeExternals()],
  // Webpack doesn't know to resolve .jsx files implicitly.
  // You can specify a file extension in your app (const Home = require('./client/components/Home.jsx').default).
  // or include .jsx in the extensions that webpack should resolve without explicit declaration
  resolve: {
    extensions: ['.js', '.jsx']
  }
} 

module.exports = merge(commonConfig, config)