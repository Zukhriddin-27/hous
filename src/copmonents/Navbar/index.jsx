import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Content, Container, Wrapper, Section, Logo, Link, Menu } from './style'
import { navbar } from '../../utils/navbar'
import Filter from '../Filter'
import Button from '../Generic/Button'

import Footer from '../Footer'
import { Dropdown } from 'antd'

const Home = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const onClick = () => navigate('/signin')
  const onclickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === 'logout') {
      localStorage.removeItem('token')
      navigate('/home')
    } else {
      navigate(`/${name}`)
    }
  }
  const menu = (
    <Menu>
      <Menu.Items data-name='my-profile' onClick={onclickProfile}>
        My profile
      </Menu.Items>
      <Menu.Items data-name='my-properties' onClick={onclickProfile}>
        My Properties
      </Menu.Items>
      <Menu.Items data-name='favourite' onClick={onclickProfile}>
        Favourites
      </Menu.Items>
      <Menu.Items data-name='logout' onClick={onclickProfile}>
        Logout
      </Menu.Items>
    </Menu>
  )

  return (
    <Container>
      <Content>
        <Wrapper>
          <Section onClick={() => navigate('/home')} logo>
            <Logo />
            <h3 style={{ color: '#fff', marginBottom: '0' }}>Houzing</h3>
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
            {token ? (
              <Dropdown
                overlay={menu}
                placement='topRight'
                arrow={{ pointAtCenter: true }}
                trigger='click'
              >
                <Button type={'dark'}>
                  <div>Profile</div>
                </Button>
              </Dropdown>
            ) : (
              <Button onClick={onClick} type='dark'>
                Sign in
              </Button>
            )}
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
