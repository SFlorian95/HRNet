import './CreateEmployee.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../features/employeeSlice'
import { states } from '../../utils/list'
import SelecMenu from '../../features/selectMenu/SelectMenu'
import Modal from '../../features/modal/Modal'

const CreateEmployee = () => {
  const dispatch = useDispatch()

  const [modalOpen, setModalOpen] = useState(false)

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
    setModalOpen(true)
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
            <SelecMenu 
            placeHolder="Select.." 
            options={states}
            nameKey1="name"
            nameKey2="abbreviation"
            onChange={(e) => setState(e.target.value)}
            />

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
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
      </div>
    </div>
  )
}

export default CreateEmployee
