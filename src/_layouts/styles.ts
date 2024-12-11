import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-grow: 1;

  width: 100%;

  margin-top: 40px;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`
