import ReduxThunk from 'redux-thunk'

import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../../../shared/src/_reducers/rootReducer'

console.log('process', process.env.DEPLOYMENT_STATE)

const composeEnhancers =
  (process.env.DEPLOYMENT_STATE !== 'production' &&
    (window as Record<any, any>).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as Record<any, any>).__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(ReduxThunk))
)
