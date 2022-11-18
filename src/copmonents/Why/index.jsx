import React from 'react'
import { Container, Content, Icons, Wrapper, ContentOne } from './style'

const Why = () => {
  return (
    <Container>
      <Content>
        <h1 className='title'>Why Choose Us</h1>
        <h1 className='info'>
          Mulla quis curabitur velit volutpat auctor bibendum consectetur sit
        </h1>
      </Content>
      <Wrapper>
        <ContentOne>
          <Icons.Message />
          <div className='subTitle'>Trusted By Thousands</div>
          <div className='info'>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </ContentOne>
        <ContentOne>
          <Icons.House />
          <div className='subTitle'>Wide Renge Of Properties</div>
          <div className='info'>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </ContentOne>
        <ContentOne>
          <Icons.Calculator />
          <div className='subTitle'>Financing Made Easy</div>
          <div className='info'>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </ContentOne>
        <ContentOne>
          <Icons.Maps />
          <div className='subTitle'>See Neighborhoods</div>
          <div className='info'>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </ContentOne>
      </Wrapper>
    </Container>
  )
}

export default Why
