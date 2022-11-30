import React from 'react'
import { Container, Content, Wrapper, ContentOne, Img } from './style'
import user from '../../assets/img/man.jpg'
const Testimonial = () => {
  return (
    <Container>
      <Content>
        <h1 className='title'>Testimonial</h1>
        <h1 className='info'>
          Mulla quis curabitur velit volutpat auctor bibendum consectetur sit
        </h1>
      </Content>
      <Wrapper>
        <ContentOne>
          <div className='subTitle'>Trusted By Thousands</div>
          <div className='info'>
            “ I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            “
          </div>

          <Img src={user || 'User'} />
          <div className='subTitle'>Marvin McKinney</div>
          <div className='info'>Designer</div>
        </ContentOne>
        <ContentOne>
          <div className='subTitle'>Wide Renge Of Properties</div>
          <div className='info'>
            “ I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            “
          </div>
          <Img src={user || 'User'} />
          <div className='subTitle'>Marvin McKinney</div>
          <div className='info'>Designer</div>
        </ContentOne>
        <ContentOne>
          <div className='subTitle'>Financing Made Easy</div>
          <div className='info'>
            “ I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            “
          </div>
          <Img src={user || 'User'} />
          <div className='subTitle'>Marvin McKinney</div>
          <div className='info'>Designer</div>
        </ContentOne>
      </Wrapper>
    </Container>
  )
}

export default Testimonial
