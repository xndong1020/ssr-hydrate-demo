import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Alert } from '@mui/material'
// import { RootState } from '../_store/configureStore'
// import { LoginUserAsync } from '../_actions/authAction/actionCreators'

const Home = (): JSX.Element => {
  // const dispatch = useDispatch()
  // const { isLoggedIn } = useSelector((state: RootState) => state.auth)
  // const { data } = useSelector((state: RootState) => state.users)


  // const handleSubmit = (user: { email: string; password: string }) => {
  //   dispatch(LoginUserAsync(user))
  // }
  
  return (
    <>
      <Alert>Home Component New</Alert>
      {/* <Button onClick={() => handleSubmit({ email: '1@test.com', 'password': 'pw1' })}>
        Login
      </Button> */}
    </>
  )
}

export default Home
