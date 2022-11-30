import React, { useContext } from 'react'
import { Container, Content, Details, Devider, Icons, Img } from './style'

import noimg from '../../assets/img/noimg.jpeg'
import { message } from 'antd'
import { PropertiesContext } from '../../context/properties'
const HouseCard = ({ data = {}, onClick }) => {
  const [state] = useContext(PropertiesContext)
  const {
    attachments,
    city,
    country,
    description,
    salePrice,
    price,
    houseDetails,
    address,
    category,
    favorite,
    id,
  } = data

  const save = (e) => {
    e.stopPropagation()

    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (favorite) res?.success && message.warning('Successfully dislaked')
        else res?.success && message.info('Successfully liked')
        state.refetch && state.refetch()
      })
  }
  return (
    <div>
      <Container onClick={onClick}>
        <Img src={(attachments && attachments[0].imgPath) || noimg} />
        <Content>
          <div className='subTitle inline'>
            {city}, {country}, {description}{' '}
          </div>
          <div className='info'>
            {address || 'Quincy St, Brooklyn, NY, USA'} -{' '}
            {category?.name || 'Category'} {houseDetails?.room}-rooms
          </div>
          <Details>
            <Details.Item>
              {' '}
              <Icons.Bed />{' '}
              <div className='info'>Bed {houseDetails.beds || 0}</div>
            </Details.Item>
            <Details.Item>
              {' '}
              <Icons.Bath />{' '}
              <div className='info'>Bath {houseDetails.bath || 0} </div>
            </Details.Item>
            <Details.Item>
              {' '}
              <Icons.Car />{' '}
              <div className='info'>Garage {houseDetails.garage || 0}</div>
            </Details.Item>
            <Details.Item>
              {' '}
              <Icons.Ruler />{' '}
              <div className='info'>Ruler {houseDetails.area || 0}kv</div>
            </Details.Item>
          </Details>
        </Content>
        <Devider />
        <Content footer>
          <Details.Item footer>
            <div className='info'>${price || 0}/mo</div>
            <div className='subTitle'>${salePrice || 0}/mo</div>
          </Details.Item>
          <Details.Item row>
            <Icons.Resize />
            <Icons.Love onClick={save} favourite={favorite} />
          </Details.Item>
        </Content>
      </Container>
    </div>
  )
}

export default HouseCard
