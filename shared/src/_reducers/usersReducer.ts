
import { User } from '../models/User'
import { UserActionTypes } from '../_actions/userAction/actionTypes'

interface UserStateProps  {
    data?: User[] | undefined,
    error?: string | undefined
}

const initUserState: UserStateProps = {
  data: [],
  error: undefined
}

type FETCH_USER = {
    type: UserActionTypes.FETCH_USER
}

type FETCH_USER_SUCCESS = {
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload: User[]
}

type FETCH_USER_FAILED = {
    type: UserActionTypes.FETCH_USER_FAILED,
    payload: string
}

type FETCH_USER_ACTION_TYPE = FETCH_USER | FETCH_USER_SUCCESS | FETCH_USER_FAILED

export const usersReducer = (
  state = initUserState,
  action: FETCH_USER_ACTION_TYPE
): UserStateProps => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_SUCCESS:
      return { data: action.payload, error: undefined }
    case UserActionTypes.FETCH_USER_FAILED:
      return { data: undefined, error: action.payload }
    default:
      return state
  }
}