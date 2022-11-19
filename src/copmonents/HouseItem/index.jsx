import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './style'

const { REACT_APP_BASE_URL: url } = process.env

const HouseItem = () => {
  const [data, setData] = useState({})
  const params = useParams()

  useEffect(() => {
    // params?.id &&
    fetch(`${url}/houses/${params?.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || {})
      })
  }, [params?.id])
  console.log(data)

  return <Container>HouseItem</Container>
}

export default HouseItem
