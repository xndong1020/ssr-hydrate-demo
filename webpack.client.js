const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

config = {
  entry: './client/src/index.tsx',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(common, config)
