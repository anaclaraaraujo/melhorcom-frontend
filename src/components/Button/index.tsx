import { Link } from 'react-router-dom'

import { Action, Navigate } from './styles'

interface ButtonProps {
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'action' | 'navigate'
  type?: 'button' | 'submit' | 'reset'
  form?: string
  disabled?: boolean
}

export function Button({
  to,
  onClick,
  children,
  variant = 'action',
  disabled,
  ...rest
}: ButtonProps) {
  const StyledButton = variant === 'action' ? Action : Navigate

  const buttonContent = (
    <StyledButton onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  )

  return to ? <Link to={to}>{buttonContent}</Link> : buttonContent
}
