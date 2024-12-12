import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'

import {
  CheckoutButton,
  Container,
  FooterContainer,
  FormContainer,
  HeaderContainer,
  InputContainer,
  Label,
  Title,
} from './styles'

type FormInputs = {
  model: string
  price: number
  brand: string
  startDate: string
  endDate: string
  color: 'Black' | 'White' | 'Gold' | 'Pink'
  code: string
}

const newPhone = z.object({
  model: z
    .string()
    .trim()
    .min(2, 'O modelo precisa ter no mínimo 2 caracteres')
    .max(255, 'O modelo pode ter no máximo 255 caracteres')
    .regex(
      /^[a-zA-Z0-9]+$/,
      'O modelo deve conter apenas caracteres alfanuméricos',
    ),

  price: z
    .number()
    .positive('O preço deve ser um número positivo')
    .refine((val) => !isNaN(val), { message: 'Preço inválido' }),

  brand: z
    .string()
    .trim()
    .min(2, 'A marca precisa ter no mínimo 2 caracteres')
    .max(255, 'A marca pode ter no máximo 255 caracteres')
    .regex(
      /^[a-zA-Z0-9]+$/,
      'A marca deve conter apenas caracteres alfanuméricos',
    ),

  startDate: z
    .string()
    .refine((val) => /^\d{2}\/\d{2}\/\d{4}$/.test(val), {
      message: 'A data de início deve estar no formato dd/MM/yyyy',
    })
    .refine(
      (val) =>
        new Date(val.split('/').reverse().join('-')) > new Date('2018-12-25'),
      {
        message: 'A data de início deve ser posterior a 25/12/2018',
      },
    ),

  endDate: z.string().refine((val) => /^\d{2}\/\d{2}\/\d{4}$/.test(val), {
    message: 'A data de fim deve estar no formato dd/MM/yyyy',
  }),

  color: z.enum(['Black', 'White', 'Gold', 'Pink'], {
    errorMap: () => ({
      message: 'Escolha uma cor válida: Black, White, Gold, Pink',
    }),
  }),

  code: z
    .string()
    .length(8, 'O código deve ter exatamente 8 caracteres')
    .regex(
      /^[a-zA-Z0-9]+$/,
      'O código deve conter apenas caracteres alfanuméricos',
    )
    .refine((val) => !alreadyUsedCodes.includes(val), {
      message: 'Este código já foi utilizado',
    }),
})

const alreadyUsedCodes = ['12345678', '87654321']

export type PhoneInfo = z.infer<typeof newPhone>

export function DetailsPhone() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newPhone),
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<PhoneInfo> = (data) => {
    console.log('onSubmit foi chamado')
    console.log('Dados recebidos:', data)

    // Verifica se todos os campos estão preenchidos
    if (Object.values(data).some((value) => value === '')) {
      alert('Todos os campos devem ser preenchidos!')
      return
    }

    console.log('Modelo:', data.model)
    console.log('Marca:', data.brand)
    console.log('Cor:', data.color)
    console.log('Preço:', data.price)
    console.log('Início das vendas:', data.startDate)
    console.log('Fim das vendas:', data.endDate)
    console.log('Código:', data.code)

    console.log('Erros de validação:', errors)
  }

  return (
    <>
      <Helmet title="Detalhes do Produto" />
      <Container>
        <HeaderContainer>
          <Title>Detalhes do produto</Title>
        </HeaderContainer>

        <FormContainer id="phone" onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Label>Modelo</Label>
            <Input
              placeholder="XT2041-1"
              {...register('model')}
              error={errors.model}
            />
          </InputContainer>

          <InputContainer>
            <Label>Marca</Label>
            <Input
              placeholder="Motorola"
              {...register('brand')}
              error={errors.brand}
            />
          </InputContainer>

          <InputContainer>
            <Label>Cor</Label>
            <Select {...register('color')} error={errors.color} />
          </InputContainer>

          <InputContainer>
            <Label>Preço</Label>
            <Input
              placeholder="1.400,00"
              type="text"
              {...register('price', {
                setValueAs: (v) =>
                  parseFloat(v.replace('.', '').replace(',', '.')),
              })}
              error={errors.price}
            />
          </InputContainer>

          <InputContainer>
            <Label>Início das vendas</Label>
            <Input
              placeholder="14/06/2020"
              {...register('startDate')}
              error={errors.startDate}
            />
          </InputContainer>

          <InputContainer>
            <Label>Fim das vendas</Label>
            <Input
              placeholder="14/06/2020"
              {...register('endDate')}
              error={errors.endDate}
            />
          </InputContainer>
        </FormContainer>
        <FooterContainer>
          <Button to="/" variant="navigate">
            Voltar
          </Button>
          <CheckoutButton type="submit" form="phone">
            Salvar
          </CheckoutButton>
        </FooterContainer>
      </Container>
    </>
  )
}
