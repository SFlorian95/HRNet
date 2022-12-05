import './ListEmployee.scss'
import { Link } from 'react-router-dom'
import { selectEmployees } from '../../features/employeeSlice'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

const ListEmployee = () => {
  const employeesList = useSelector(selectEmployees)
  console.log(employeesList)

  return (
    <div className="list-employee">
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {employeesList.map((employee) => {
              return (
                <tr key={nanoid()}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.startDate}</td>
                  <td>{employee.department}</td>
                  <td>{employee.dateOfBirth}</td>
                  <td>{employee.street}</td>
                  <td>{employee.city}</td>
                  <td>{employee.state}</td>
                  <td>{employee.zipCode}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default ListEmployee
