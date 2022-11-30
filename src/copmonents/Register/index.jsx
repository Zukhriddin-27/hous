import React from 'react'
import { Container } from './style'
import { Tabs } from 'antd'
import Signup from '../Signup'
import SignIn from '../SignIn'
const Register = () => {
  return (
    <Container>
      <Tabs
        defaultActiveKey='1'
        centered='true'
        items={[
          {
            label: `Sign In`,
            key: '1',
            children: <SignIn />,
          },
          {
            label: `Sign Up`,
            key: '2',
            children: <Signup />,
          },
        ]}
      />
    </Container>
  )
}

export default Register
