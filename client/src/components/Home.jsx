import React from 'react'
import { Button, Alert } from '@mui/material'

const Home = () => {
  return (
    <>
      <Alert>Home Component New</Alert>
      <Button onClick={() => console.log('Button clicked 22')}>Request</Button>
    </>
  )
}

export default Home
