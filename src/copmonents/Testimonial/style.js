import styled from 'styled-components'
// import { ReactComponent as cardMassage } from '../../assets/icons/cardMassage.svg'
// import { ReactComponent as cardMaps } from '../../assets/icons/cardMaps.svg'
// import { ReactComponent as calculator } from '../../assets/icons/calculator.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f5f7fc;
  margin: auto;
  position: relative;
  height: 482px;
  width: 100%;
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
  width: 380px;
  height: 197px;
  width: 100%;
  padding: 10px 38px 40px 38px;
  font-size: 16px;
  line-height: 24px;
  gap: 20px;

  padding: 40px 48px 61px 48px;
  color: #696969;
  .info {
    padding: 0px 8px;
  }
  background: #ffffff;
  /* Box - Shadow */
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0px 130px;
  margin: auto;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`
const Img = styled.img`
  margin-top: 25px;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  object-fit: cover;
`

// const Icons = styled.div``
// Icons.House = styled(cardHouse)`
//   margin-bottom: 8px;
// `
// Icons.Message = styled(cardMassage)`
//   & path {
//     fill: #0061df;
//   }
//   margin-bottom: 8px;
// `
// Icons.Maps = styled(cardMaps)`
//   margin-bottom: 8px;
// `
// Icons.Calculator = styled(calculator)`
//   margin-bottom: 8px;
// `

export { Container, Content, Wrapper, ContentOne, Img }
