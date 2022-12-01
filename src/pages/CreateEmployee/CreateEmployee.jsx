import './CreateEmployee.scss'
import { Link } from 'react-router-dom'
const CreateEmployee = () => {
  return (
    <div className="create-employee">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/list-employee">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input type="text" id="date-of-birth" />

          <label htmlFor="start-date">Start Date</label>
          <input type="text" id="start-date" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input type="text" id="street" />

            <label htmlFor="city">City</label>
            <input type="text" id="city" />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input type="number" id="zip-code" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button>Save</button>
      </div>
    </div>
  )
}

export default CreateEmployee
