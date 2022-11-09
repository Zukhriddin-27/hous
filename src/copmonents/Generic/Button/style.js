import styled from 'styled-components'

const getType = ({ type }) => {
  switch (type) {
    case 'dark':
      return {
        background: '#0d263b',
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

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  font-size: 14px;
  border-radius: 2px;
  height: ${({ height }) => (height ? `${height}px` : `44px`)};
  width: ${({ width }) => (width ? `${width}px` : `130px`)};

  cursor: pointer;
  ${getType}
  :active {
    opacity: 0.7;
  }
`

export { Container }
