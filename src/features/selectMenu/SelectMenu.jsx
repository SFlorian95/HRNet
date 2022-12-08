import { useEffect } from 'react'
import { useState } from 'react'
import './SelectMenu.scss'

const SelectMenu = ({ placeHolder, options, nameKey1, nameKey2 }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(false)

    window.addEventListener("click", handler)
    return () => {
      window.removeEventListener("click", handler)
    }
  }, [setOpen])

  const handleInputClick = (e) => {
    e.stopPropagation()
    setOpen(true)
  }

  const getDisplay = () => {
    return placeHolder
  }

  const renameKey = (key1, key2) => {
    options.forEach((obj) => {
      obj.label = obj[key1]
      delete obj[key1]

      obj.value = obj[key2]
      delete obj[key2]
    })
  }

  renameKey(nameKey1, nameKey2)

  return (
    <div className="dropdown-container">
      <div className="dropdown-input" onClick={handleInputClick}>
        <div className="dropdown-selected-value">{getDisplay()}</div>
      </div>
      {open && (
        <div className="dropdown-menu">
          {options.map((option) => {
            return (
              <div key={`${option.value}-${option.index}`} value={option.value} className="dropdown-item">
                {option.label}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SelectMenu
