import { Divider, Checkbox } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Wrapper,
  Container,
  Section,
  Price,
  Content,
  Icons,
  ContentItems,
  Descreption,
  User,
  Location,
} from './style'
import Recent from '../Recent'
import { Input, Button } from '../Generic'
import user from '../../assets/img/user.png'
import Maps from '../Maps'

const HouseItem = () => {
  const [data, setData] = useState({})
  const [value, onChange] = useState(new Date())
  const params = useParams()

  useEffect(() => {
    // request({
    //   url: `/houses/${params?.id}`,
    //   method: 'GET',
    //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
    // params?.id &&
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData(res?.data || {})
        window.scrollTo(0, 0)
      })
  }, [params?.id])
  console.log(data)

  return (
    <React.Fragment>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <Content>
              <Content.Title large top>
                {data?.name}
              </Content.Title>
              <div className='info'>
                {data.city}, {data.address}, {data?.country}
              </div>
            </Content>
            <Content>
              <ContentItems>
                <Icons>
                  <Icons.Share />
                </Icons>
                <div className='info'>share</div>
                <Icons>
                  <Icons.Love />
                </Icons>
                <div className='info'>save</div>
              </ContentItems>
            </Content>
          </Section>
          <Price>
            <div className='info'>${data.price}</div>
            <div className='subTitle'>
              <h2>${data.salePrice}</h2>
            </div>
          </Price>
          <Section>
            <Content>
              <ContentItems>
                <Icons.Bed />{' '}
                <div className='info'>Bed {data?.houseDetails?.beds || 0}</div>{' '}
                <Icons.Bath />{' '}
                <div className='info'>
                  Bath {data?.houseDetails?.bath || 0}{' '}
                </div>{' '}
                <Icons.Car />{' '}
                <div className='info'>
                  Garage {data?.houseDetails?.garage || 0}
                </div>{' '}
                <Icons.Ruler />{' '}
                <div className='info'>
                  Ruler {data?.houseDetails?.area || 0}kv
                </div>
              </ContentItems>
            </Content>
            <ContentItems>
              <div className='info'>{data?.user?.firstname}</div>
            </ContentItems>
          </Section>
          <Content.Title mb>Description</Content.Title>

          <Descreption>
            <div className='info'>{data?.description}</div>
          </Descreption>
          <Content.Title mb>Documents</Content.Title>
          <Section>
            <ContentItems>
              <Icons.Download />
              <div className='info'>123documenrs.pdf</div>
              <a href='#'>Download</a>
            </ContentItems>
            <ContentItems>
              <Icons.Download />
              <div className='info'>123documenrs.pdf</div>
              <a href='#'>Download</a>
            </ContentItems>{' '}
            <ContentItems>
              <Icons.Download />
              <div className='info'>123documenrs.pdf</div>
              <a href='#'>Download</a>
            </ContentItems>
          </Section>
          <Divider />
          <Content.Title mb>Location</Content.Title>
          <Section>
            <Location>
              <ContentItems>
                <div className='title'>Address: </div>
                <div className='info'>{data?.address}</div>
              </ContentItems>
              <ContentItems>
                <div className='title'>State/County: </div>
                <div className='info'>{data?.country}</div>
              </ContentItems>
            </Location>

            <Location>
              <ContentItems>
                <div className='title'>City:</div>
                <div className='info'>{data?.city}</div>
              </ContentItems>
              <ContentItems>
                <div className='title'>Zip:</div>
                <div className='info'>{data?.zipCode}</div>
              </ContentItems>
            </Location>
            <Location>
              <ContentItems>
                <div className='title'>Area:</div>
                <div className='info'>{data?.region}</div>
              </ContentItems>
              <ContentItems>
                <div className='title'>Country:</div>
                <div className='info'>{data?.country}</div>
              </ContentItems>
            </Location>
          </Section>
          <Content>
            <Maps data={data?.location} />
          </Content>
          <Content.Title mb>Property Details</Content.Title>
          <Section>
            <Location>
              <ContentItems>
                <div className='subTitle'>Property ID:</div>
                <div className='info'>{data?.id || '0'}</div>
              </ContentItems>
              <ContentItems>
                <div className='subTitle'>Price:</div>
                <div className='info'>{data?.price || '0'}</div>
              </ContentItems>
              <ContentItems>
                <div className='subTitle'>Property Size:</div>
                <div className='info'>{data?.houseDetails?.area || '0'}</div>
              </ContentItems>
              <ContentItems>
                <div className='subTitle'>Year build:</div>
                <div className='info'>
                  {data?.houseDetails?.yearBuilt || '0'}
                </div>
              </ContentItems>
            </Location>
            <Location>
              <ContentItems>
                <div className='subTitle'>Bedrooms:</div>
                <div className='info'>{data?.houseDetails?.beds || '0'}</div>
              </ContentItems>
              <ContentItems>
                <div className='subTitle'>Bathrooms:</div>
                <div className='info'>{data?.houseDetails?.bath || '0'}</div>
              </ContentItems>
              <ContentItems>
                <div className='subTitle'>Garage:</div>
                <div className='info'>{data?.houseDetails?.garage || '0'}</div>
              </ContentItems>
              <ContentItems>
                <div className='subTitle'>Garage Size:</div>
                <div className='info'>{data?.houseDetails?.area || '0'}</div>
              </ContentItems>
            </Location>
            <Location>
              <ContentItems>
                <div className='subTitle'>Property Type:</div>
                <div className='info'>{data?.category || '0'}</div>
              </ContentItems>
              <ContentItems>
                <div className='subTitle'>Property Status:</div>
                <div className='info'>{data?.status || '0'}</div>
              </ContentItems>
            </Location>
          </Section>
          <Divider />
          <Content.Title mb>Features</Content.Title>
          <Section>
            <Location>
              <ContentItems>
                <Icons>
                  <Icons.Air />
                </Icons>
                <div className='info'>Air Conditioning</div>
              </ContentItems>
              <ContentItems>
                <Icons>
                  <Icons.Bar />
                </Icons>
                <div className='info'>Barbeque</div>
              </ContentItems>
              <ContentItems>
                <Icons>
                  <Icons.Dryer />
                </Icons>
                <div className='info'>Dryer</div>
              </ContentItems>
              <ContentItems>
                <Icons>
                  <Icons.Gym />
                </Icons>
                <div className='info'>Gym</div>
              </ContentItems>
            </Location>
            <Location>
              <ContentItems>
                <Icons>
                  <Icons.Shower />
                </Icons>
                <div className='info'></div>
              </ContentItems>
              <ContentItems>
                <Icons>
                  <Icons.Loundary />
                </Icons>
                <div className='info'>Laundry</div>
              </ContentItems>
              <ContentItems>
                <Icons>
                  <Icons.Loundary />
                </Icons>
                <div className='info'>Microwave</div>
              </ContentItems>
              <ContentItems>
                <Icons>
                  <Icons.Micro />
                </Icons>
                <div className='info'>Outdoor Shower</div>
              </ContentItems>
            </Location>
            <Location>
              <ContentItems>
                <Icons>
                  <Icons.Air />
                </Icons>
                <div className='info'>Air Conditioning</div>
              </ContentItems>
              <ContentItems>
                <Icons>
                  <Icons.Swimming />
                </Icons>
                <div className='info'>Souna</div>
              </ContentItems>
              <ContentItems>
                <Icons>
                  <Icons.Swimming />
                </Icons>
                <div className='info'>Swimming Pool</div>
              </ContentItems>
              <ContentItems>
                <Icons>
                  <Icons.Tv />
                </Icons>
                <div className='info'>Tv Cable</div>
              </ContentItems>
            </Location>
            <Location>
              <ContentItems>
                <Icons>
                  <Icons.Washer />
                </Icons>
                <div className='info'>Washer</div>
              </ContentItems>
              <ContentItems>
                <Icons>
                  <Icons.Wifi />
                </Icons>
                <div className='info'>WiFi</div>
              </ContentItems>
              <ContentItems>
                <Icons>
                  <Icons.Window />
                </Icons>
                <div className='info'>Window Coverings</div>
              </ContentItems>
              <ContentItems>
                <Icons>
                  <Icons.Dinning />
                </Icons>
                <div className='info'>Dinning room</div>
              </ContentItems>
            </Location>
          </Section>
          <Content.Title mb>Schedule A Tour</Content.Title>
          <Section>
            <ContentItems>
              <Input width={430} mr placeholder='Date' />
              <Input width={430} placeholder='Time' />
            </ContentItems>
          </Section>
          <Content.Title mb>Your Information</Content.Title>
          <Section>
            <ContentItems>
              <Input mr width={280} placeholder='Name' />
              <Input mr width={280} placeholder='Phone' />
              <Input width={280} placeholder='Email' />
            </ContentItems>
          </Section>
          <Section>
            <ContentItems>
              <Input mr width={880} placeholder='Message' />
            </ContentItems>
          </Section>
          <Button width={250}>Sumbit a tour request</Button>
          <Divider />
        </Container>
        <Container className='user' flex={1}>
          <Section>
            <User.Img src={user} alt='User Image' />
            <div>
              <div className='subTitle'>{data?.user?.firstname}</div>
              <div className='info'>{data?.user?.email}</div>
            </div>
          </Section>
          <Input placeholder='Name' />
          <Input placeholder='Phone' />
          <Input placeholder='Email' />
          <div className='subTitle'>Message</div>
          <Input type={'textarea'} height='60' />

          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>

          <Button width='100%' />
        </Container>
      </Wrapper>
      <Recent />
    </React.Fragment>
  )
}

export default HouseItem
