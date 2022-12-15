import './ListEmployee.scss'
import { Link } from 'react-router-dom'
import { selectEmployees } from '../../features/employeeSlice'
import { useSelector } from 'react-redux'
import DataTable from '../../features/dataTable/DataTable'


const ListEmployee = () => {
  const employeesList = useSelector(selectEmployees)
  console.log(employeesList)

  
  return (
    <div className="list-employee">
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataTable data={employeesList} />
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default ListEmployee
