import React from 'react'
import { Container } from './style'
const Button = ({ children, type, onClick, width, height }) => {
  return (
    <Container onClick={onClick} type={type} width={width} height={height}>
      {children || 'Generic button'}
    </Container>
  )
}

export default Button
