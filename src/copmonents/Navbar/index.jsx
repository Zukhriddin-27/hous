import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Content, Container, Wrapper, Section, Logo, Link } from './style'
import { navbar } from '../../utils/navbar'
import Filter from '../Filter'
import Button from '../Generic/Button'

import Footer from '../Footer'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Content>
        <Wrapper>
          <Section onClick={() => navigate('/home')} logo>
            <Logo />
            <h3 style={{ color: '#fff', 'margin-bottom': '0' }}>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ path, title, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && 'active'}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              )
            })}
          </Section>

          <Section>
            <Button onClick={() => navigate('/signin')} type='dark'>
              Sign in
            </Button>
          </Section>
        </Wrapper>
      </Content>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Home
