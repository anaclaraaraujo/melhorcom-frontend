import styled from 'styled-components'

export const Action = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const Navigate = styled.button`
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
