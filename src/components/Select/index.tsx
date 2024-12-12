import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { ChangeEvent, forwardRef, useState } from 'react'
import { FieldError } from 'react-hook-form'

import { SelectContainer } from './styles.ts'

type SelectProps = {
  error?: FieldError
  value?: string
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  ref?: React.Ref<HTMLSelectElement>
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, value, onChange, ...rest }, ref) => {
    const [selectColor, setSelectColor] = useState<string>('')

    const colors = ['Black', 'White', 'Gold', 'Pink']

    const handleColorChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectColor(event.target.value)
      onChange?.(event)
    }

    return (
      <SelectContainer $isSelected={!!selectColor}>
        <select
          ref={ref}
          value={selectColor || value}
          onChange={handleColorChange}
          {...rest}
        >
          <option value="" disabled>
            {selectColor || 'Preto'}
          </option>
          {colors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
        <ArrowDropDownIcon />
      </SelectContainer>
    )
  }
)
