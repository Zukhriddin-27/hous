import React, { useEffect, useState } from 'react'
import { Container } from './style'
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
    console.log(id)
  }

  return (
    <Container>
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
    </Container>
  )
}

export default Properties
