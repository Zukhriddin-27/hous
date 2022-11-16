import styled from 'styled-components'
import { ReactComponent as arrow } from '../../assets/icons/arrow.svg'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding: 96px 130px;
  margin: auto;
  position: relative;
`

const Arrow = styled(arrow)`
  position: absolute;
  top: 45%;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 18px;
  background: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (left ? 'rotate(-90deg)' : 'rotate(90deg)')};
  left: ${({ left }) => !left && '20px'};
  right: ${({ left }) => left && '20px'};
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
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
`
Content.Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: 0.02em;
  color: #fff;
`
Content.Desc = styled.div`
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`
Content.Price = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
`

export { Container, Arrow, Img, Blur, Content }
