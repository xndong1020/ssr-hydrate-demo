import { User } from "../models/User"
import { AuthActionTypes } from '../_actions/authAction/actionTypes'

interface AuthStateProps {
  currentUser?: User | undefined
  error?: string | undefined
  isLoggedIn: boolean
}

const initAuthState: AuthStateProps = {
  currentUser: undefined,
  error: undefined,
  isLoggedIn: false
}
type USER_LOG_IN = {
  type: AuthActionTypes.USER_LOG_IN
}

type USER_LOG_IN_SUCCESS = {
  type: AuthActionTypes.USER_LOG_IN_SUCCESS
  payload: User
}

type USER_LOG_IN_FAIL = {
  type: AuthActionTypes.USER_LOG_IN_FAIL
  payload: string
}

type USER_LOG_OUT = {
  type: AuthActionTypes.USER_LOG_OUT
}

type AUTH_ACTION_TYPE =
  | USER_LOG_IN
  | USER_LOG_IN_SUCCESS
  | USER_LOG_IN_FAIL
  | USER_LOG_OUT

export const authReducer = (
  state = initAuthState,
  action: AUTH_ACTION_TYPE
): AuthStateProps => {
  switch (action.type) {
    case AuthActionTypes.USER_LOG_IN_SUCCESS:
      return { currentUser: action.payload, isLoggedIn: true, error: undefined }
    case AuthActionTypes.USER_LOG_IN_FAIL:
      return {
        currentUser: undefined,
        isLoggedIn: false,
        error: action.payload
      }
    case AuthActionTypes.USER_LOG_OUT:
      return { currentUser: undefined, isLoggedIn: false, error: undefined }
    default:
      return state
  }
}
