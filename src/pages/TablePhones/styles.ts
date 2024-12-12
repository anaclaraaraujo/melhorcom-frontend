import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 912px;
  padding: 0 24px;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 24px;
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #1d1d1d;
`

export const ListPhone = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  border: 1px solid #1d1d1d;
  border-radius: 5px;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableHeader = styled.th`
  font-size: 14px;
  font-weight: 500;
  color: #1d1d1d;

  text-align: left;
  padding: 24px 43px;
`

export const TableRow = styled.tr``

export const TableCell = styled.td`
  font-size: 14px;
  font-weight: 500;
  color: #1d1d1d;
  white-space: nowrap;

  text-align: left;
  border-top: 1px solid #1d1d1d;

  padding: 24px;

  &:last-child {
    div {
      display: flex;
      justify-content: flex-end;
      padding: 0;
      gap: 8px;
      align-items: center;
    }
  }
`
