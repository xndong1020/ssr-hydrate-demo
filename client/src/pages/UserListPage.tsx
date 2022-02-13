import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { User } from '../../../shared/src/models/User'
import { fetchUserAsync } from '../../../shared/src/_actions/userAction/actionCreators'
import { RootState } from '../../../shared/src/_reducers/rootReducer'

export const loadUserListData = (dispatch: Dispatch<any>) => {
  return dispatch(fetchUserAsync())
}

export const UserListPage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    const fetchUsers = () => {
      loadUserListData(dispatch)
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
