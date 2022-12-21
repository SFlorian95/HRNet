import Calendar from 'react-calendar'
import { useState } from 'react'

const DatePicker = () => {
const [dateOfBirth, setDateOfBirth] = useState('')
  return (
    <div>
      <Calendar onChange={(e) => setDateOfBirth(e.target.value)} />
    </div>
  )
}

export default DatePicker
