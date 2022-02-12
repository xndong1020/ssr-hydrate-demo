import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { User } from '../../../shared/src/models/User'
import { RootState } from '../../../shared/src/_reducers/rootReducer'
import { FETCH_USER_ACTION_TYPE } from '../../../shared/src/_reducers/usersReducer'


export const UserList = ({
  fetchInitialData
}: {
  fetchInitialData: () => (dispatch: Dispatch<AnyAction>) => Promise<any>
}) => {
  const dispatch = useDispatch()
  const { data } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    const fetchUsers = () => {
      dispatch(fetchInitialData())
    }
    fetchUsers()
  }, [])

  return (
    <>
      <div>Here's a big list of users:</div>
      <ul>
        {data && data.map((user: User) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </>
  )
}
