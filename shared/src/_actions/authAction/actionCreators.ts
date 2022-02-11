import { Dispatch } from 'redux'
import axios from '../../_apis/axios'
import { LoadingStatusActionType } from '../loadingStatusAction/actionTypes'
import { AuthActionTypes } from './actionTypes'
import { User } from '../../models/User'

export const LoginUserAsync = (user: {
  email: string
  password: string
}): ((dispatch: Dispatch) => Promise<void>) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: LoadingStatusActionType.SET_IS_LOADING_TRUE })
    try {
      const users = (await axios.get<User[]>('/users')).data
      dispatch({
        type: AuthActionTypes.USER_LOG_IN_SUCCESS,
        payload: users
      })
    } catch (err) {
      dispatch({
        type: AuthActionTypes.USER_LOG_IN_FAIL,
        payload: (err as Error).message
      })
    } finally {
      dispatch({ type: LoadingStatusActionType.SET_IS_LOADING_FALSE })
    }
  }
}
