import styled from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  margin-bottom: 96px;
  padding: var(--padding);
  width: 100%;
`
const Content = styled.div`
  display: block;
  text-align: center;

  margin: 64px 0 70px 0;
`
const Wrapper = styled.div`
  display: grid;
  /* flex-wrap: wrap; */
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;
  box-sizing: border-box;
`

export { Container, Content, Wrapper }
