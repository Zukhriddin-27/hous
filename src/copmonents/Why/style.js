import styled from 'styled-components'
import { ReactComponent as cardHouse } from '../../assets/icons/cardHouse.svg'
import { ReactComponent as cardMassage } from '../../assets/icons/cardMassage.svg'
import { ReactComponent as cardMaps } from '../../assets/icons/cardMaps.svg'
import { ReactComponent as calculator } from '../../assets/icons/calculator.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f7fc;
  margin: auto;
  position: relative;
  height: 434px;
`
const Content = styled.div`
  display: block;
  text-align: center;
  margin-top: 40px;
`
const ContentOne = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
  width: 235px;
  height: 120px;
  width: 100%;
  margin: 10px 38px 40px 38px;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  .info {
    padding: 0px 8px;
  }
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0px 130px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  height: 230px;
`
const Icons = styled.div``
Icons.House = styled(cardHouse)`
  margin-bottom: 8px;
`
Icons.Message = styled(cardMassage)`
  & path {
    fill: #0061df;
  }
  margin-bottom: 8px;
`
Icons.Maps = styled(cardMaps)`
  margin-bottom: 8px;
`
Icons.Calculator = styled(calculator)`
  margin-bottom: 8px;
`

export { Container, Content, Wrapper, Icons, ContentOne }
