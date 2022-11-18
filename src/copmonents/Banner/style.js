import styled from 'styled-components'
const Container = styled.div`
  height: fit-content; //571px
  position: relative;
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
  width: 567px;
  margin: auto;
  text-align: center;
`
Content.Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.02em;
  color: #fff;
`

export { Container, Img, Blur, Content }
