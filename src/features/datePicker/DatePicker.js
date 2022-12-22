import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react'

const DatePicker = ({ value, setValue }) => {
  const [isDisplayed, setIsDisplayed] = useState(false)
  const locale = 'en-US'

  const dateFormated = value.toDateString()
  console.log(dateFormated)

  return (
    <div>
      <Calendar
        locale="en"
        calendarType="US"
        onChange={setValue}
        value={value}
      />
    </div>
  )
}

export default DatePicker
