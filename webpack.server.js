const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')


config = {
  target: 'node',
  entry: './server/src/index.ts',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build')
  },
 
}

module.exports = merge(common, config)