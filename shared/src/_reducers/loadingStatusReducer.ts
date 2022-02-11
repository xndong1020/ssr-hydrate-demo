import { LoadingStatusActionType } from "../_actions/loadingStatusAction/actionTypes"

interface LoadingStatusProps {
    isLoading: boolean
}

const initLoadingStatus: LoadingStatusProps = {
  isLoading: false
}

type SET_IS_LOADING_TRUE = {
    type: LoadingStatusActionType.SET_IS_LOADING_TRUE
}

type SET_IS_LOADING_FALSE = {
  type: LoadingStatusActionType.SET_IS_LOADING_FALSE
}

type LOAD_STATUS_TYPE = SET_IS_LOADING_TRUE | SET_IS_LOADING_FALSE

export const loadingStatusReducer = (
  initState = initLoadingStatus,
  action: LOAD_STATUS_TYPE
): LoadingStatusProps => {
  switch (action.type) {
    case LoadingStatusActionType.SET_IS_LOADING_TRUE:
      return { isLoading: true }
    case LoadingStatusActionType.SET_IS_LOADING_FALSE:
      return { isLoading: false }
    default:
      return initState
  }
}