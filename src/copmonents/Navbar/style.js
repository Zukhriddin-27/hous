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
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  gap: 16px;
  width: 177px;

  background: #ffffff;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`
Menu.Items = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  color: #000000;
`

export { Container, Wrapper, Content, Section, Logo, Link, Menu }
