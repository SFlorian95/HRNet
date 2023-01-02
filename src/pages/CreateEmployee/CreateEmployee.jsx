import './CreateEmployee.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../features/employeeSlice'
import { states } from '../../utils/list'
import CustomSelect from '../../features/selectMenu/CustomSelect'
//import CustomModal from '../../features/modal/CustomModal'
// import DatePicker from '../../features/datePicker/DatePicker'
import DatePicker from '../../features/datePicker/Calendar'
import CustomModal from 'nawenn-modal-react'

const CreateEmployee = () => {
  const dispatch = useDispatch()

  const [modalIsDisplayed, setModalIsDisplayed] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [startDate, setStartDate] = useState('')
  const [department, setDepartment] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipcode] = useState('')

  const handleDateOfBirthInput = (date) => setDateOfBirth(date)
  const handleStartDateInput = (date) => setStartDate(date)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const data = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    }

    console.log(data)

    dispatch(add(data))
    setModalIsDisplayed(true)
  }

  return (
    <div className="create-employee">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker id="date-of-birth" selected={dateOfBirth} onChange={handleDateOfBirthInput} />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker id="start-date" selected={startDate} onChange={handleStartDateInput} />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="state">State</label>
            <CustomSelect
              id="state"
              name="state"
              selected={state}
              data={states}
              onChange={(value) => setState(value)}
              option={{ name: 'name', value: 'abbreviation' }}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="number"
              id="zip-code"
              onChange={(e) => setZipcode(e.target.value)}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <CustomSelect
            id="department"
            name="department"
            selected={department}
            data={[
              'Sales',
              'Marketing',
              'Engineering',
              'Human Resources',
              'Legal',
            ]}
            onChange={(value) => setDepartment(value)}
          />

          <button>Save</button>
        </form>
        <CustomModal
          isDisplayed={modalIsDisplayed}
          onCloseModal={() => setModalIsDisplayed(false)}
          content={
            <div id="confirmation" className="modal">
              Employee Created!
            </div>
          }
        />
      </div>
    </div>
  )
}

export default CreateEmployee
