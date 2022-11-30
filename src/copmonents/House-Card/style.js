import styled from 'styled-components'

import { ReactComponent as bath } from '../../assets/icons/bath.svg'
import { ReactComponent as bed } from '../../assets/icons/bed.svg'
import { ReactComponent as car } from '../../assets/icons/car.svg'
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg'
import { ReactComponent as love } from '../../assets/icons/love.svg'
import { ReactComponent as resize } from '../../assets/icons/resize.svg'

const Container = styled.div`
  width: 380px;

  border: 1px solid #e6e9ec;
`
const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 220px;
  object-fit: cover;
`
const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? 'row' : 'column')};
  justify-content: ${({ footer }) => footer && 'space-between'};

  padding: 16px 20px 16px 20px;
  background: #fff;
`
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`

Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: ${({ footer }) => !footer && 'center'};
`
const Icons = styled.div``

Icons.Bed = styled(bed)``
Icons.Bath = styled(bath)``
Icons.Car = styled(car)``
Icons.Ruler = styled(ruler)``
Icons.Love = styled(love)`
  width: 27px;
  height: 27px;
  padding: 6px;
  background: ${({ favourite }) => (favourite ? `#CC5040` : `#f6f8f9`)};
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  &path {
    fill: ${({ favourite }) => favourite && '#fff'};
  }
  :active {
    transform: scale(0.9);
  }
`
Icons.Resize = styled(resize)``

const Devider = styled.div`
  background: #e6ea9c;
  height: 1px;
  width: 100%;
`

export { Container, Img, Content, Details, Icons, Devider }
