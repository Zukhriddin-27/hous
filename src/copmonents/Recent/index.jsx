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
import { FreeMode, Autoplay, Pagination } from 'swiper'
const { REACT_APP_BASE_URL: url } = process.env

const Recent = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || [])
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
      <>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Autoplay, Pagination]}
          className='mySwiper'
        >
          {data.map((value) => {
            return (
              <SwiperSlide>
                <HouseCard
                  data={value}
                  key={value.id}
                  onClick={() => navigate(`/properties/${value?.id}`)}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </>
    </Container>
  )
}

export default Recent
