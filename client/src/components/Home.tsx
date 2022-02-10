import React from 'react'
import { Button, Alert } from '@mui/material'

const Home = (): JSX.Element => {
  return (
    <>
      <Alert>Home Component New</Alert>
      <Button onClick={() => console.log('Button clicked')}>Click Me</Button>
    </>
  )
}

export default Home
