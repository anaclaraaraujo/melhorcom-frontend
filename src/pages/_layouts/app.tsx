import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { Container, Content } from './styles'

export function AppLayout() {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  )
}
