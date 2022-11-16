import React, { useEffect, useState } from 'react'
import { Container } from './style'
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
    centerPadding: '140px',
    slidesToShow: 3,
    speed: 500,
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
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category=${value.name}`)}
              data={value}
            />
          )
        })}
      </Slider>
    </Container>
  )
}

export default Category
