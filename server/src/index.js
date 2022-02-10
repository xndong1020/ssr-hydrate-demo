import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import { App } from '../../client/src/App'

const app = express()

/**
 * open up the 'public' directory to the outside world, 
 * by telling Express.js to treat this public directory as a freely available public directory.
 */
app.use(express.static('public'))

app.get('/', (req, res) => {
    /**
     * rather than mounting React components to some DOM node
       it renders all those components exactly one time
       converts the output of them to raw HTML, and returns it as a string
     */
    const content = renderToString(<App />)
    const html = `
      <html>
        <head>Rendered from server</head>
        <body>
          <div id="root">${content}</div>
          <!-- browser need to retrieve the client.js from the server, by looking from the Express.js static resources directory, which in our case is the 'public' directory-->
          <script src="client.js"></script>
        </body>
      </html>
    `
    res.send(html)
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})

