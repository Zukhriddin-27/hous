import React from 'react'
import { Container, Content, Wrapper } from './style'
import HouseCard from '../House-Card'
import { useNavigate, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useContext } from 'react'
import { PropertiesContext } from '../../context/properties'
const { REACT_APP_BASE_URL: url } = process.env

const Favourite = () => {
  const { search } = useLocation()
  const navigate = useNavigate()
  const [, dispatch] = useContext(PropertiesContext)

  const { refetch, data } = useQuery(
    [search],
    async () => {
      const res = await fetch(`${url}/houses/getAll/favouriteList`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      return await res.json()
    },
    {
      onSuccess: (res) => {
        dispatch({ type: 'refetch', payload: refetch })
      },
    }
  )

  const onSelect = (id) => {
    navigate(`/properties/${id}`)
  }
  return (
    <Container>
      <Content>
        <h1 className='title'>Favourite</h1>
        <h1 className='info'>
          Mulla quis curabitur velit volutpat auctor bibendum consectetur sit
        </h1>
      </Content>

      <Wrapper>
        {data?.data?.length ? (
          data?.data.map((value) => {
            return (
              <HouseCard
                onClick={() => {
                  onSelect(value.id)
                }}
                data={value}
                key={value.id}
              />
            )
          })
        ) : (
          <h1>Data no</h1>
        )}
      </Wrapper>
    </Container>
  )
}

export default Favourite
