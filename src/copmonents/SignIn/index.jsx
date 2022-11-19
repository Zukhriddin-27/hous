import { Button, Input } from '../Generic'
import React, { useState } from 'react'
import { Container, Content } from './style'
import useRequest from '../../hooks/useRequest'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
const SignIn = () => {
  const request = useRequest()
  const [body, setBody] = useState({})

  const navigate = useNavigate()

  const handleChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    })
  }

  const info = () => {
    message.info('Succesfully Logged')
  }
  const warning = () => {
    message.warning('Login yoki email xato!')
  }

  const onSubmit = async () => {
    try {
      request({
        url: `/public/auth/login`,
        method: 'POST',
        body,
        me: true,
      }).then((res) => {
        if (res?.authenticationToken) navigate('/home')
        localStorage.setItem('token', res?.authenticationToken)
        console.log(res)
        info()
      })
    } catch (error) {
      warning(error)
    }
  }
  return (
    <Container>
      <Content>
        <div className='subTitle'>Sign In</div>
        <Input onChange={handleChange} placeholder='email' type={'email'} />
        <Input
          onChange={handleChange}
          placeholder='password'
          type={'password'}
        />
        <Button onClick={onSubmit} width={520}>
          Login
        </Button>
      </Content>
    </Container>
  )
}

export default SignIn
