import styled from 'styled-components'

import { ReactComponent as bath } from '../../assets/icons/bath.svg'
import { ReactComponent as bed } from '../../assets/icons/bed.svg'
import { ReactComponent as car } from '../../assets/icons/car.svg'
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg'
import { ReactComponent as love } from '../../assets/icons/love.svg'
import { ReactComponent as resize } from '../../assets/icons/resize.svg'

const Container = styled.div`
  width: auto;
  max-width: 280px;
  min-width: 230px;

  height: auto;
  border: 1px solid #d1d0d0;
  border-radius: 3px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`
const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 220px;
  max-height: 350px;
  min-height: 350px;
  border-radius: 3px;
`

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 3px;
`
const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Monserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #fff;
`

const Icons = styled.div``

export { Container, Img, Content, Icons, Blur }
