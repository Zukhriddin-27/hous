import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Content, Container, Wrapper, Section, Logo, Link } from './style'
import { navbar } from '../../utils/navbar'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Content>
        <Wrapper>
          <Section onClick={() => navigate('/home')} logo>
            <Logo />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ path, title }, index) => {
              return (
                <Link
                  className={({ isActive }) => isActive && 'active'}
                  key={index}
                  to={path}
                >
                  {title}
                </Link>
              )
            })}
          </Section>

          <Section>
            <button>Sign in</button>
          </Section>
        </Wrapper>
      </Content>
      <Outlet />
    </Container>
  )
}

export default Home
