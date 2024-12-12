import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  padding: 24px;

  @media (min-width: 1024px) {
    max-width: 420px;
  }
`

export const HeaderContainer = styled.div``

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #000000;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (min-width: 1024px) {
    max-width: 198px;
  }
`

export const Label = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #1d1d1d;
`

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`

export const CheckoutButton = styled.button`
  display: flex;

  background: #dae3ed;
  border: 1px solid #1d1d1d;
  border-radius: 5px;
  padding: 8px 18px;

  font-size: 14px;
  font-weight: 500;
  color: #1d1d1d;
  text-transform: uppercase;

  &:hover {
    background: #c8d6e8;
  }
`
