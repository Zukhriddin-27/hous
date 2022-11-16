import React, { useRef } from 'react'
import { Dropdown } from 'antd'
import { Button } from '../Generic'
import { Container, Icons, MenuWrapper, Section, Input } from './style'
import { uzeReplace } from '../../hooks/useReplace'
import { useSearch } from '../../hooks/useSearch'
import { useNavigate, useLocation } from 'react-router-dom'

export const Filter = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const query = useSearch()

  const countryRef = useRef()
  const regionRef = useRef()
  const cityRef = useRef()
  const zipRef = useRef()
  const roomsRef = useRef()
  const sizeRef = useRef()
  const sortRef = useRef()
  const minPriceRef = useRef()
  const maxPriceRef = useRef()

  const handleChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`)
  }

  const menu = (
    <MenuWrapper>
      <h1 className='subTitle'>Address</h1>
      <Section>
        <Input
          defaultValue={query.get('country')}
          onChange={handleChange}
          ref={countryRef}
          name='country'
          placeholder='Country'
        />
        <Input
          defaultValue={query.get('region')}
          onChange={handleChange}
          ref={regionRef}
          name='region'
          placeholder='Region'
        />
        <Input
          defaultValue={query.get('city')}
          onChange={handleChange}
          ref={cityRef}
          name='city'
          placeholder='City'
        />
        <Input
          defaultValue={query.get('zip_code')}
          onChange={handleChange}
          name='zip_code'
          ref={zipRef}
          placeholder='Zip Code'
        />
      </Section>
      <h1 className='subTitle'>Apartment info</h1>

      <Section>
        <Input ref={roomsRef} placeholder='Rooms' />
        <Input ref={sizeRef} placeholder='Size' />
        <Input ref={sortRef} placeholder='Sort' />
      </Section>
      <h1 className='subTitle'>Price</h1>

      <Section>
        <Input ref={minPriceRef} placeholder='Min Price' />
        <Input ref={maxPriceRef} placeholder='Max Price' />
      </Section>
      <h1 className='subTitle'>Footer</h1>

      <Section></Section>
    </MenuWrapper>
  )
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={'Enter an address, neighborhood, city or ZIP code'}
      />

      <Dropdown
        overlay={menu}
        placement='bottomRight'
        arrow={{ pointAtCenter: true }}
        trigger='click'
      >
        <div>
          <Button type={'light'}>
            <Icons.Filter /> Advenced
          </Button>
        </div>
      </Dropdown>

      <Button>
        <Icons.Search /> Search
      </Button>
    </Container>
  )
}

export default Filter
