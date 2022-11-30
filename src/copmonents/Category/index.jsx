import React, { useEffect, useState } from 'react'
import { Container, Content } from './style'
import CategoryCard from '../Category-Card'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import './style.css'
// import required modules
const { REACT_APP_BASE_URL: url } = process.env

const Category = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

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
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
      >
        {data.map((value) => {
          return (
            <SwiperSlide>
              <CategoryCard
                onClick={() => navigate(`/properties?category_id=${value.id}`)}
                data={value}
                key={value.id}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default Category
