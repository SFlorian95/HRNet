import './ListEmployee.scss'
import { Link } from 'react-router-dom'

const ListEmployee = () => {
    return (
        <div className='list-employee'>
            <div id="employee-div" className='container'>
                <h1>Current Employees</h1>
                <table id="employee-table" class="display"></table>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default ListEmployee