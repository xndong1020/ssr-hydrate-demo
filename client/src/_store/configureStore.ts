import ReduxThunk from 'redux-thunk'
import isUndefined from 'lodash/isUndefined'

import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../../../shared/src/_reducers/rootReducer'

console.log('DEPLOYMENT_STATE', process.env.DEPLOYMENT_STATE)
console.log('__isBrowser__', process.env.__isBrowser__)
console.log(
  'window.__INITIAL_STATE__',
  (window as Record<any, any>).__INITIAL_STATE__
)

const composeEnhancers =
  (process.env.DEPLOYMENT_STATE !== 'production' &&
    (window as Record<any, any>).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as Record<any, any>).__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose

export const store = createStore(
  rootReducer,
  (window as Record<any, any>).__INITIAL_STATE__,
  composeEnhancers(applyMiddleware(ReduxThunk))
)
