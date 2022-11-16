import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  /* flex-wrap: wrap; */
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  padding: var(--padding);
  grid-gap: 20px;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  justify-content: center;
`

export { Container }
