import React from 'react'
import Carousel from '../Carousel'
import HouseCard from '../House-Card'
import { Container } from './style'
const Home = () => {
  return (
    <Container>
      <Carousel />
      <HouseCard />
    </Container>
  )
}

export default Home
