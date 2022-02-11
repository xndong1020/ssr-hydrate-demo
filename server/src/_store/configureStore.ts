import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../../../shared/src/_reducers/rootReducer'

export default () => {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))
    return store
} 