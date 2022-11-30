import styled from 'styled-components'

const getType = ({ type }) => {
  switch (type) {
    case 'dark':
      return {
        background: 'transparent',
        border: '1px solid #ffffff',
        color: '#fff',
      }
    case 'light':
      return {
        background: '#fff',
        border: '1px solid #e6e9ec',
        color: '#e6e9ec',
      }
    case 'primary':
      return {
        background: '#0061df',
        border: '1px solid #0061df',
        color: '#fff',
      }

    default:
      return { background: '#0061df', border: 'none', color: '#fff' }
  }
}

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  /* text-transform: capitalize; */
  border-radius: 2px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  height: ${({ height }) => (height ? `${height}px` : `44px`)};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  padding-left: ${({ icon }) => (icon ? '35px' : '20px')};
  margin-right: ${({ mr }) => (mr ? '36px' : `24px`)};
  border-bottom: 1px solid #e6e9ec;
  border-left: none;
  border-right: none;
  border-top: none;
  outline: none;
  :focus {
    border-bottom: 2px solid #0061df;
    border-top: none;
    border-left: none;
    border-right: none;
  }
  /* ${getType} */
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
`
const Icon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 20px;
  top: 50%;
`
export { Container, Wrapper, Icon }
