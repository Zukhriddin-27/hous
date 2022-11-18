import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Content,
  Wrapper,
  Copyright,
  Icons,
  Diveder,
  Logo,
  Section,
} from './style'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Content width={295}>
          <Content.Title>Trusted By Thousands</Content.Title>
          <Content.Info>
            <Content.Items>
              <Icons.Location />
              <Content.Item>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </Content.Item>
            </Content.Items>
            <Content.Items>
              <Icons.Phone />
              <Content.Item>23 456 7890</Content.Item>
            </Content.Items>

            <Content.Items>
              <Icons.Mail />
              <Content.Item>support@houzing.com</Content.Item>
            </Content.Items>
          </Content.Info>
        </Content>

        <Content>
          <Content.Title>Discover</Content.Title>
          <Content.Info>
            <Content.Item>Tashkent</Content.Item>
            <Content.Item>New York</Content.Item>
            <Content.Item>London</Content.Item>
            <Content.Item>Miami</Content.Item>
          </Content.Info>
        </Content>
        <Content>
          <Content.Title>Lists by Category</Content.Title>
          <Content.Info>
            <Content.Item>Apartments</Content.Item>
            <Content.Item>Condos</Content.Item>
            <Content.Item>Houses</Content.Item>
            <Content.Item>Office</Content.Item>
            <Content.Item>Retail</Content.Item>
            <Content.Item>Villas</Content.Item>
          </Content.Info>
        </Content>
        <Content>
          <Content.Title>Lists by Category</Content.Title>
          <Content.Info>
            <Content.Item>About Us</Content.Item>
            <Content.Item>Terms & Conditions</Content.Item>
            <Content.Item>Support Center</Content.Item>
            <Content.Item>Contact Us</Content.Item>
            <Content.Item></Content.Item>
          </Content.Info>
        </Content>
      </Wrapper>
      <Diveder />
      <Copyright>
        <Section onClick={() => navigate('/home')} logo>
          <Logo />
          <h3 style={{ color: '#fff', 'margin-bottom': '0' }}>Houzing</h3>
        </Section>
        <Section>Copyright © 2021 CreativeLayers. All Right Reserved.</Section>
      </Copyright>
    </Container>
  )
}

export default Footer
