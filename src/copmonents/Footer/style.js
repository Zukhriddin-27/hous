import styled from 'styled-components'
import { ReactComponent as location } from '../../assets/icons/cardMaps.svg'
import { ReactComponent as mail } from '../../assets/icons/email.svg'
import { ReactComponent as phone } from '../../assets/icons/phone.svg'
import { ReactComponent as logoImg } from '../../assets/icons/logo.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #0d263b;
  margin: auto;
  padding: 66px 0 0 0;
  width: 100%;
  position: relative;
  height: 434px;
`

const Content = styled.div`
  display: block;
  text-align: start;
  justify-content: space-evenly;

  height: 120px;

  font-size: 16px;
  line-height: 24px;
  color: #696969;
`

Content.Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`
Content.Info = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`
Content.Items = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: start;
  width: 295px;
`
Content.Item = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
  color: #ffffff;
`
const Icons = styled.div``
Icons.Mail = styled(mail)`
  width: 14px;

  & path {
    fill: #fff;
  }
  margin-right: 20px;
  margin-top: 0px;
`
Icons.Phone = styled(phone)`
  width: 14px;

  & path {
    fill: #fff;
  }
  margin-right: 20px;
  margin-top: 0px;
`
Icons.Location = styled(location)`
  width: 22px;
  & path {
    fill: #fff;
  }
  margin-right: 20px;
  margin-top: -14px;
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 50px;
  margin: auto;
  display: flex;
  height: 348px;
  justify-content: space-around;
`
const Diveder = styled.div`
  background: #fff;
  height: 1px;
  width: 100%;
`
const Copyright = styled.div`
  width: 1440px;
  padding: 0 130px;
  align-items: center;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 68px;
`
const Section = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`
const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #fff;
  }
`

export { Container, Wrapper, Content, Icons, Diveder, Logo, Copyright, Section }
