import iconLogo from '/public/icon/logo.svg'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <img src={iconLogo} alt="Logo da empresa" />
    </Container>
  )
}
