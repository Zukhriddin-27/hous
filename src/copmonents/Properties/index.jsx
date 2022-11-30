import React, { useEffect, useState } from 'react'
import { Container, Content, Wrapper } from './style'
import HouseCard from '../House-Card'
import { useNavigate, useLocation } from 'react-router-dom'
// import useRequest from '../../hooks/useRequest'
const { REACT_APP_BASE_URL: url } = process.env

const Properties = () => {
  const [data, setData] = useState([])
  const { search } = useLocation()
  const navigate = useNavigate()
  // const request = useRequest()

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data || [])
      })

    // request({ url: `/houses/list${search}` }).then((res) =>
    //   setData(res?.data || [])
    // )
  }, [search])
  const onSelect = (id) => {
    navigate(`/properties/${id}`)
  }

  return (
    <Container>
      <Content>
        <h1 className='title'>Properties</h1>
        <h1 className='info'>
          Mulla quis curabitur velit volutpat auctor bibendum consectetur sit
        </h1>
      </Content>

      <Wrapper>
        {data.map((value) => {
          return (
            <HouseCard
              onClick={() => {
                onSelect(value.id)
              }}
              data={value}
              key={value.id}
            />
          )
        })}
      </Wrapper>
    </Container>
  )
}

export default Properties
