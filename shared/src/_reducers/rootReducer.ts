import { createStore, applyMiddleware, combineReducers } from 'redux'

import { usersReducer } from './usersReducer'
import { authReducer } from './authReducer'
import { loadingStatusReducer } from './loadingStatusReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  loadingStatus: loadingStatusReducer
})

export type RootState = ReturnType<typeof rootReducer>