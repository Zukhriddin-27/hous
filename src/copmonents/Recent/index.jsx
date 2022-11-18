import React, { useEffect, useState } from 'react'
import { Container, Content } from './style'
import HouseCard from '../House-Card'
import Slider from 'react-slick'

const { REACT_APP_BASE_URL: url } = process.env

const Recent = () => {
  const [data, setData] = useState([])
  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 3,
    speed: 1000,
  }
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data || [])
      })
  }, [])
  return (
    <Container>
      <Content>
        <h1 className='title'>Recent Properties for Rent</h1>
        <h1 className='info'>
          Mulla quis curabitur velit volutpat auctor bibendum consectetur sit
        </h1>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return <HouseCard data={value} key={value.id} />
        })}
      </Slider>
    </Container>
  )
}

export default Recent
