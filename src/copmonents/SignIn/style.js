import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin: auto;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  text-align: start;
  margin: 40px 0;
  padding: 30px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  max-width: 580px;
  height: 376px;
  background: #fff;
`
const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  font-size: 14px;
  border-radius: 2px;
  height: ${({ height }) => (height ? `${height}px` : `44px`)};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  padding-left: ${({ icon }) => (icon ? '35px' : '20px')};
  border: 1px solid #e6e9ec;
  outline: none;
  :focus {
    border-bottom: 2px solid #0061df;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`
export { Container, Content, Input }
