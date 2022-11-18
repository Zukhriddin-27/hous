import React, { useEffect, useState } from 'react'
import { Container, Content } from './style'
import CategoryCard from '../Category-Card'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'

const { REACT_APP_BASE_URL: url } = process.env

const Category = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '290px',
    slidesToShow: 2,
    speed: 1000,
  }
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || [])
      })
  }, [])
  console.log(data)
  return (
    <Container>
      <Content>
        <h1 className='title'>Category</h1>
        <h1 className='info'>
          Mulla quis curabitur velit volutpat auctor bibendum consectetur sit
        </h1>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              data={value}
            />
          )
        })}
      </Slider>
    </Container>
  )
}

export default Category
