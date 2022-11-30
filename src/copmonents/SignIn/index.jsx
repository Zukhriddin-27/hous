import { Button, Input } from '../Generic'
import React, { useState } from 'react'
import { Content } from './style'
import useRequest from '../../hooks/useRequest'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
export const SignIn = () => {
  const request = useRequest()
  const [body, setBody] = useState({})

  const navigate = useNavigate()

  const handleChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    })
  }

  const info = () => {
    message.info('Succesfully Logged')
  }

  const onSubmit = async () => {
    request({
      url: `/public/auth/login`,
      method: 'POST',
      body,
      me: true,
    }).then((res) => {
      if (res?.authenticationToken) {
        navigate('/home')
        localStorage.setItem('token', res?.authenticationToken)
      }
      info()
    })
  }

  return (
    <Content>
      <div className='subTitle'>Sign In</div>
      <Input
        onChange={handleChange}
        placeholder='email'
        name='email'
        type='email'
      />
      <Input
        onChange={handleChange}
        placeholder='password'
        name='password'
        type='password'
      />
      <Button onClick={onSubmit} width={520}>
        Login
      </Button>
    </Content>
  )
}

export default SignIn
