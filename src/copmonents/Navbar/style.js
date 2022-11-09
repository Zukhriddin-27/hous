import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as logoImg } from '../../assets/icons/logo.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Content = styled.div`
  background: var(--colorPrimary);
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  max-width: 1440px;
  color: white;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
`
const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && 'pointer'};

  .active {
    color: #c9f7ac;
  }
`
const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #fff;
  }
`
const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 0 32px;
`
export { Container, Wrapper, Content, Section, Logo, Link }
