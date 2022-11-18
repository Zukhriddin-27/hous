import React, { useEffect, useRef, useState } from 'react'
import { Dropdown } from 'antd'
import { Button } from '../Generic'
import {
  Container,
  Icons,
  MenuWrapper,
  Section,
  Input,
  SelectAntd,
} from './style'
import { uzeReplace } from '../../hooks/useReplace'
import { useSearch } from '../../hooks/useSearch'
import { useNavigate, useLocation } from 'react-router-dom'

export const Filter = () => {
  const [data, setData] = useState([])
  const [value, setValue] = useState('Select Category')
  const { REACT_APP_BASE_URL: url } = process.env

  const navigate = useNavigate()
  const location = useLocation()
  const query = useSearch()

  const countryRef = useRef()
  const regionRef = useRef()
  const cityRef = useRef()
  const zipRef = useRef()
  const roomsRef = useRef()

  const minPriceRef = useRef()
  const maxPriceRef = useRef()

  const handleChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`)
  }

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || [])
      })
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    let [d] = data?.filter((ctg) => ctg.id === Number(query.get('category_id')))

    d?.name && setValue(d?.name)
    // !query.get('select_id') && setValue('Select Category')
    //eslint-disable-next-line
  }, [location?.search, data])

  const onChangeCategory = (category_id) => {
    navigate(`properties/${uzeReplace('category_id', category_id)}`)
  }
  const onChangeSort = (sort) => {
    navigate(`properties/${uzeReplace('sort', sort)}`)
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
        <Input
          onChange={handleChange}
          name='room'
          ref={roomsRef}
          placeholder='Rooms'
        />
        <SelectAntd
          defaultValue={query.get('sort') || 'Selecet Sort'}
          onChange={onChangeSort}
        >
          <SelectAntd.Option value={''}>Selecet Sort</SelectAntd.Option>
          <SelectAntd.Option value={'desc'}>Kamayuvchi</SelectAntd.Option>
          <SelectAntd.Option value={'asc'}>O'suvchi</SelectAntd.Option>
        </SelectAntd>
        <SelectAntd defaultValue={value} onChange={onChangeCategory}>
          <SelectAntd.Option value={''}>Selecet Category</SelectAntd.Option>
          {data.map((value) => {
            return (
              <SelectAntd.Option value={value?.id} key={value.id}>
                {value?.name}
              </SelectAntd.Option>
            )
          })}
        </SelectAntd>
      </Section>
      <h1 className='subTitle'>Price</h1>
      <Section>
        <Input
          onChange={handleChange}
          name='min_price'
          ref={minPriceRef}
          placeholder='Min Price'
        />
        <Input
          onChange={handleChange}
          name='max_price'
          ref={maxPriceRef}
          placeholder='Max Price'
        />
      </Section>
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
