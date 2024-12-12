import {
  FocusEvent,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  useState,
} from 'react'
import type { FieldError } from 'react-hook-form'

import { Box, Container, ErrorMessage } from './styles'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}

export const Input = forwardRef(function TextInput(
  { error, containerProps, onFocus, onBlur, ...rest }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onBlur?.(event)
  }

  return (
    <Box {...containerProps}>
      <Container data-state={isFocused ? 'focused' : 'blurred'}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />
        {error?.message ? (
          <ErrorMessage role="alert">{error.message}</ErrorMessage>
        ) : null}
      </Container>
    </Box>
  )
})
