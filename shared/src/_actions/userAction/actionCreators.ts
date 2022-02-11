import { Dispatch } from 'redux'
import axios from '../../_apis/axios'
import { LoadingStatusActionType } from '../loadingStatusAction/actionTypes'
import { User } from '../../models/User'
import { UserActionTypes } from './actionTypes'

export const fetchUserAsync = (): ((dispatch: Dispatch) => Promise<void>) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: LoadingStatusActionType.SET_IS_LOADING_TRUE })
    try {
      const users = (await axios.get<User[]>('/users')).data
      dispatch({
        type: UserActionTypes.FETCH_USER_SUCCESS,
        payload: users
      })
    } catch (err) {
      dispatch({
        type: UserActionTypes.FETCH_USER_FAILED,
        payload: (err as Error).message
      })
    } finally {
      dispatch({ type: LoadingStatusActionType.SET_IS_LOADING_FALSE })
    }
  }
}
