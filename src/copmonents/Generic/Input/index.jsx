import React from 'react'
import { Container } from './style'
const Input = ({
  type,
  onClick,
  placeholder,
  width,
  height,
  name,
  value,
  defaultValue,
}) => {
  return (
    <Container
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onClick={onClick}
      type={type}
      width={width}
      height={height}
    />
  )
}

export default Input
