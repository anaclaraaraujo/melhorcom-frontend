import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/Button'

import {
  Container,
  HeaderContainer,
  ListPhone,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  Title,
} from './styles'

export function TablePhones() {
  return (
    <>
      <Helmet title="Produtos" />
      <Container>
        <HeaderContainer>
          <Title>Produtos</Title>
          <Button to="/details" variant="navigate">
            <AddIcon />
            <StayCurrentPortraitIcon />
            Adicionar
          </Button>
        </HeaderContainer>

        <ListPhone>
          <Table>
            <thead>
              <tr>
                <TableHeader>Código</TableHeader>
                <TableHeader>Modelo</TableHeader>
                <TableHeader>Preço</TableHeader>
                <TableHeader>Marca</TableHeader>
                <TableHeader>Cor</TableHeader>
                <TableHeader></TableHeader>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>23856234</TableCell>
                  <TableCell>XT2041-1</TableCell>
                  <TableCell>R$ 1.407,12</TableCell>
                  <TableCell>Motorola</TableCell>
                  <TableCell>Preto</TableCell>
                  <TableCell>
                    <div>
                      <Button variant="action" to="/details">
                        <EditIcon sx={{ fontSize: 24 }} />
                      </Button>
                      <Button variant="action" to="/details">
                        <DeleteIcon sx={{ fontSize: 24 }} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </ListPhone>
      </Container>
    </>
  )
}
