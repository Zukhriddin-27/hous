import React, { useEffect, useState } from 'react'
import { Container, Content } from './style'
import HouseCard from '../House-Card'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import './style.css'
// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper'

const { REACT_APP_BASE_URL: url } = process.env

const Recommended = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

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
        <h1 className='title'>Recommended</h1>
        <h1 className='info'>
          Mulla quis curabitur velit volutpat auctor bibendum consectetur sit
        </h1>
      </Content>
      <Swiper
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        modules={[Autoplay, FreeMode, Navigation]}
        className='mySwiper'
      >
        {data.map((value) => {
          return (
            <SwiperSlide key={value.id}>
              <HouseCard
                data={value}
                onClick={() => navigate(`/properties/${value?.id}`)}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default Recommended
