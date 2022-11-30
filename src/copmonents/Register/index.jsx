import React from 'react'
import { Container } from './style'
import { Tabs } from 'antd'
import Signin from '../Signin/index'
import Signup from '../Signup/index'
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
            children: <Signin />,
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
