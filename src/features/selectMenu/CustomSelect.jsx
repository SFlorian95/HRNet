import './CustomSelect.scss'
import { useState } from 'react'

const CustomSelect = ({
  id,
  name,
  selected,
  data,
  onChange = (value) => {},
  option,
}) => {
  const [value, setValue] = useState('')
  const handleOnChange = (e) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <select
      className="custom-select"
      id={id}
      name={name}
      value={value}
      onChange={handleOnChange}
    >
      {data.sort().map((item, index) => (
        <option
          key={`${option ? item[option.value] : item}-${index}`}
          value={option ? item[option.value] : item}
        >
          {option ? item[option.name] : item}
        </option>
      ))}
    </select>
  )
}

export default CustomSelect
