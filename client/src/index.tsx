import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './_store/configureStore'

import { UnifiedRoutes } from '../../shared/src/Routes'

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <UnifiedRoutes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)