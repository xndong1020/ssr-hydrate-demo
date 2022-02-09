### 01. init setup for express server

server/src/index.js

```js
const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString

const Home = require('../../client/components/Home').default

const app = express()

app.get('/', (req, res) => {
  /**
     * rather than mounting React components to some DOM node
       it renders all those components exactly one time
       converts the output of them to raw HTML, and returns it as a string
     */
  const content = renderToString(<Home />)
  res.send(content)
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
```

now if you run `yarn start` or `node src/index.js`, you will get below error `const content = renderToString(<Home />) SyntaxError: Unexpected token '<'`. This is because express by default has no idea what the JSX syntax is.

#### 02. JSX on backend server

In order to work with JSX syntax, the backend server needs webpack & babel.


```js
const path = require('path')

module.exports = {
    /**
     * we need to inform webpack to build a bundle for nodeJS
     * rather than for the browser
     */
    target: 'node',

    // root file of server application
    entry: './src/index.js',

    // where to put output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // run babel on every file
    // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  },
  // Webpack doesn't know to resolve .jsx files implicitly.
  // You can specify a file extension in your app (const Home = require('./client/components/Home.jsx').default).
  // or include .jsx in the extensions that webpack should resolve without explicit declaration
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
```