import { Button, Input } from '../Generic'
import React, { useState } from 'react'
import { Content } from './style'
import useRequest from '../../hooks/useRequest'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
const Signup = () => {
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
      url: `/public/auth/register`,
      method: 'POST',
      body,
      me: true,
    }).then((res) => {
      console.log(res)
      info()
      navigate('/signin')
    })
  }
  return (
    <Content>
      <div className='subTitle'>Sign Up</div>
      <Input
        onChange={handleChange}
        placeholder='Email'
        name='email'
        type='email'
      />
      <Input
        onChange={handleChange}
        placeholder='First Name'
        name='firstname'
        type='text'
      />
      <Input
        onChange={handleChange}
        placeholder='Last Name'
        name='lastname'
        type='text'
      />

      <Input
        onChange={handleChange}
        placeholder='Password'
        name='password'
        type='password'
      />

      <Button onClick={onSubmit} width={520}>
        Register
      </Button>
    </Content>
  )
}

export default Signup
