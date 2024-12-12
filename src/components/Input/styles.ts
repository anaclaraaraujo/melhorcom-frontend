import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.6rem;
  border: 1px solid #707070;
  border-radius: 5px;

  transition: all 0.2s;

  &[data-state='focused'] {
  }

  &[data-state='blurred'] {
    border-color: #707070;
  }

  input {
    width: 100%;

    background-color: transparent;
    border: none;
    padding: 1.2rem;
    outline: none;

    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0px;
    color: #1d1d1d;

    &::placeholder {
      color: #1d1d1d;
      opacity: 0.5;
    }
  }

  span {
    padding-right: 1.2rem;
    font-style: italic;

    text-align: left;
  }
`

export const ErrorMessage = styled.p`
  font-weight: 400;
  color: red;
`
