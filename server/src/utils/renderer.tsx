import React from 'react'
import { AnyAction, Store } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import  serialize from 'serialize-javascript'
import { StaticRouter } from 'react-router-dom/server'
import { UnifiedRoutes } from '../../../shared/src/Routes'

export default (url: string, store: Store<any, AnyAction>): string => {
  /**
   * rather than mounting React components to some DOM node
     it renders all those components exactly one time
    converts the output of them to raw HTML, and returns it as a string
  */
  const content = renderToString(
    // StaticRouter doesn't have the access to the browser url, hence it must read the current path from req.url
    // for determining which component need to return to the user
    <Provider store={store}>
      <StaticRouter location={url}>
        <UnifiedRoutes />
      </StaticRouter>
    </Provider>
  )
  const html = `
      <html>
        <head>
          <title>Rendered from server</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <!-- browser need to retrieve the client.js from the server, by looking from the Express.js static resources directory, which in our case is the 'public' directory-->
           <!--dumps store state into global window object-->
          <script>
            window.__INITIAL_STATE__ = ${serialize(store.getState())}
          </script>
          <script src="client.js"></script>
        </body>
      </html>
    `
  return html
}
