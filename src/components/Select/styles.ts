import styled from 'styled-components'

export const SelectContainer = styled.div<{ $isSelected: boolean }>`
  background: #ffffff;
  border: 1px solid #707070;
  border-radius: 5px;
  height: 40px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

  position: relative;
  white-space: nowrap;
  cursor: pointer;

  select {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    font-size: 14px;
    font-weight: 500;
    color: #1d1d1d;
    opacity: ${(props) => (props.$isSelected ? 1 : 0.5)};
    appearance: none; /* Remove o estilo do select nativo */
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: left;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: #1d1d1d;
    opacity: ${(props) => (props.$isSelected ? 1 : 0.5)};
  }
`
export const ErrorMessage = styled.p`
  font-weight: 400;
  color: red;
`
