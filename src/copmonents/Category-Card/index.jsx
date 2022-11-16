import React from 'react'
import { Container, Content, Icons, Img, Blur } from './style'

import noimg from '../../assets/img/noimg.jpeg'
import category from '../../assets/img/category.png'

const HouseCard = ({ data = {} }) => {
  const { name } = data
  return (
    <Container>
      <Img src={category || noimg} />
      <Blur />
      <Content>{name || 'Category Name'}</Content>
    </Container>
  )
}

export default HouseCard
