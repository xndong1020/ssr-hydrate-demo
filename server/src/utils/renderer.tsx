import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import Routes from '../../../shared/src/Routes'

export default (url: string): string => {
  /**
     * rather than mounting React components to some DOM node
         it renders all those components exactly one time
        converts the output of them to raw HTML, and returns it as a string
        */
  const content = renderToString(
    // StaticRouter doesn't have the access to the browser url, hence it must read the current path from req.url
    // for determining which component need to return to the user
    <StaticRouter location={url}>
      <Routes />
    </StaticRouter>
  )
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
