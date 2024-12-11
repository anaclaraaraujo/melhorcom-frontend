import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait'
import { Helmet } from 'react-helmet-async'

import {
  Button,
  ButtonAction,
  Container,
  HeaderContainer,
  ListPhone,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  Title,
} from './styles'

export function ListCell() {
  return (
    <>
      <Helmet title="Produtos" />
      <Container>
        <HeaderContainer>
          <Title>Produtos</Title>
          <Button>
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
                      <ButtonAction>
                        <EditIcon />
                      </ButtonAction>
                      <ButtonAction>
                        <DeleteIcon />
                      </ButtonAction>
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
