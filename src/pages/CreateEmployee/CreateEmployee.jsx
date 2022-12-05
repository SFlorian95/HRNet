import './CreateEmployee.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../features/employeeSlice'
import { states } from '../../utils/list'

const CreateEmployee = () => {
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [startDate, setStartDate] = useState('')
  const [department, setDepartment] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipcode] = useState('')

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
          <input
            type="date"
            id="date-of-birth"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            type="date"
            id="start-date"
            onChange={(e) => setStartDate(e.target.value)}
          />

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
            <select
              name="state"
              id="state"
              onChange={(e) => setState(e.target.value)}
            >
              {states.map((item) => {
                return <option key={`${item.abbreviation}-${item.index}`} value={item.abbreviation}>{item.name}</option>
              })}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="number"
              id="zip-code"
              onChange={(e) => setZipcode(e.target.value)}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <button>Save</button>
        </form>
      </div>
    </div>
  )
}

export default CreateEmployee
