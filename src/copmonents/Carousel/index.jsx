import React, { useRef } from 'react'
import { Carousel } from 'antd'
import { Arrow, Blur, Container, Content, Img } from './style'

import img1 from '../../assets/img/house1.png'
import img2 from '../../assets/img/house2.png'

const GenCarousel = () => {
  const slider = useRef()
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === 'right') slider.current.prev()
    if (name === 'left') slider.current.next()
  }
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc className='subChild'>
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Desc>
        <Content.Price>5,250 / month</Content.Price>
      </Content>
      <Arrow left onClick={onMove} data-name='left' />
      <Arrow onClick={onMove} data-name='right' />
    </Container>
  )
}

export default GenCarousel
