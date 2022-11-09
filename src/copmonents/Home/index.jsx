import React from 'react'
import { Input } from '../Generic'
import { Container } from './style'
const Home = () => {
  return (
    <Container>
      <h1>Home page</h1>
      <Input placeholder={'test'} width={'200px'} />
    </Container>
  )
}

export default Home
