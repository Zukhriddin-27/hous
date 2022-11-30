import React from 'react'
import Banner from '../Banner'
import Carousel from '../Carousel'
import Category from '../Category'
import Recent from '../Recent'
import Recommended from '../Recommended'
import Testimonial from '../Testimonial'
import Why from '../Why'
import { Container } from './style'
const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Recent />
      <Testimonial />
    </Container>
  )
}

export default Home
