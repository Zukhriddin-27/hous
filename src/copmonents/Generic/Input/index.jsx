import React, { forwardRef } from 'react'
import { Container, Wrapper, Icon } from './style'

export const Input = forwardRef(
  (
    {
      type,
      onChange,
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
          onChange={onChange}
          type={type}
          width={width}
          height={height}
        />
      </Wrapper>
    )
  }
)

export default Input
