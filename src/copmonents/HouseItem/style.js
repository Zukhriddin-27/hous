import styled from 'styled-components'

import { ReactComponent as love } from '../../assets/icons/love.svg'
import { ReactComponent as share } from '../../assets/icons/share.svg'
import { ReactComponent as bath } from '../../assets/icons/bath.svg'
import { ReactComponent as bed } from '../../assets/icons/bed.svg'
import { ReactComponent as car } from '../../assets/icons/car.svg'
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg'
import { ReactComponent as resize } from '../../assets/icons/resize.svg'
import { ReactComponent as download } from '../../assets/icons/download.svg'

import { ReactComponent as air } from '../../assets/feature/air.svg'
import { ReactComponent as bar } from '../../assets/feature/bar.svg'
import { ReactComponent as dinning } from '../../assets/feature/dinning.svg'
import { ReactComponent as dryer } from '../../assets/feature/dryer.svg'
import { ReactComponent as fredgee } from '../../assets/feature/fredgee.svg'
import { ReactComponent as gym } from '../../assets/feature/gym.svg'
// import { ReactComponent as lawn } from '../../assets/feature/lawn.svg'
import { ReactComponent as loundary } from '../../assets/feature/loundary.svg'
import { ReactComponent as shower } from '../../assets/feature/shower.svg'
import { ReactComponent as micro } from '../../assets/feature/micro.svg'
import { ReactComponent as swimming } from '../../assets/feature/swimming.svg'
import { ReactComponent as tv } from '../../assets/feature/tv-cable.svg'
import { ReactComponent as washer } from '../../assets/feature/washer.svg'
import { ReactComponent as wifi } from '../../assets/feature/wifi.svg'
import { ReactComponent as window } from '../../assets/feature/window.svg'

const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 100%;
  padding: var(--padding);
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  ~ .user {
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 20px;
    padding: 24px;
    gap: 20px;
    height: 570px;
  }
  .subTitle {
    margin: 0px 0 0 24px;
    font-size: 14px;
  }
`
const Section = styled.div`
  display: flex;
  justify-content: space-between;
`

const Price = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  .info {
    margin-top: 0;
    text-decoration: line-through;
    margin-right: 10px;
  }
`
const Content = styled.div`
  .info {
    margin-top: 0;
  }
`
Content.Title = styled.div`
  font-size: ${({ large }) => (large ? '28px' : `18px`)};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  margin-bottom: ${({ mb }) => (!mb ? '0' : '16px')};
  margin-top: ${({ top }) => (top ? '0' : '48px')};
`
const Icons = styled.div`
  background: #f6f8f9;
  padding: 9px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: center;
  margin: 0 8px 0 0px;
  :active {
    transform: scale(0.9);
  }
`
Icons.Love = styled(love)``
Icons.Share = styled(share)``
Icons.Bed = styled(bed)`
  margin: 0 8px 0 0px;
`
Icons.Bath = styled(bath)`
  margin: 0 8px 0 42px;
`
Icons.Car = styled(car)`
  margin: 0 8px 0 42px;
`
Icons.Ruler = styled(ruler)`
  margin: 0 8px 0 42px;
`
Icons.Resize = styled(resize)``
Icons.Download = styled(download)`
  width: 25px;
  margin-right: 10px;
  height: 25px;
`
Icons.Air = styled(air)`
  width: 18px;
  height: 18px;
`
Icons.Wifi = styled(wifi)`
  width: 18px;
  height: 18px;
`
Icons.Tv = styled(tv)`
  width: 18px;
  height: 18px;
`
Icons.Dinning = styled(dinning)`
  width: 18px;
  height: 18px;
`
Icons.Swimming = styled(swimming)`
  width: 18px;
  height: 18px;
`
Icons.Loundary = styled(loundary)`
  width: 18px;
  height: 18px;
`
Icons.Window = styled(window)`
  width: 18px;
  height: 18px;
`
Icons.Washer = styled(washer)`
  width: 18px;
  height: 18px;
`
Icons.Dryer = styled(dryer)`
  width: 18px;
  height: 18px;
`
Icons.Fredgee = styled(fredgee)`
  width: 18px;
  height: 18px;
`
Icons.Shower = styled(shower)`
  width: 18px;
  height: 18px;
`
Icons.Micro = styled(micro)`
  width: 18px;
  height: 18px;
`
Icons.Gym = styled(gym)`
  width: 18px;
  height: 18px;
`
Icons.Bar = styled(bar)`
  width: 18px;
  height: 18px;
`

const Location = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
  margin-bottom: 24px;
  text-align: start;
  box-sizing: border-box;

  .info {
    margin-top: 0;
    text-transform: capitalize;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
  }
  .subTitle {
    margin-left: 0;
    margin-right: 8px;
  }
  .title {
    font-size: 14px;
    margin-right: 8px;
  }
  a {
    margin-left: 24px;
  }
`
const Descreption = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`
const User = styled.div``
User.Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #f6f8f9;
`

export {
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
}
