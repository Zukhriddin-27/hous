import React, { forwardRef } from 'react'
import { Container, Wrapper, Icon } from './style'

const Input = forwardRef(
  (
    {
      type,
      onClick,
      placeholder,
      width,
      height,
      name,
      value,
      defaultValue,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onClick={onClick}
          type={type}
          width={width}
          height={height}
        />
      </Wrapper>
    )
  }
)

export default Input
