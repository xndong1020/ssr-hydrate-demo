import React from 'react'
import { renderToString } from 'react-dom/server'

import { App } from '../../../client/src/App'

export default () => {
  /**
     * rather than mounting React components to some DOM node
         it renders all those components exactly one time
        converts the output of them to raw HTML, and returns it as a string
        */
  const content = renderToString(<App />)
  const html = `
      <html>
        <head>
          <title>Rendered from server</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <!-- browser need to retrieve the client.js from the server, by looking from the Express.js static resources directory, which in our case is the 'public' directory-->
          <script src="client.js"></script>
        </body>
      </html>
    `
  return html
}
