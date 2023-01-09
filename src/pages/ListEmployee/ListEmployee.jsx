import './ListEmployee.scss'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectEmployees,
  sort,
  selectSortedBy,
  selectShowEntries,
  setShowEntries,
  selectCountPaginations,
  selectCurrentPagination,
  selectEntries,
  setCurrentPagintation,
  search,
  selectSearch,
  selectShowing,
} from '../../features/employeeSlice'
import arrowUp from '../../assets/arrow_up.png'
import arrowDown from '../../assets/arrow_down.png'

const ListEmployee = () => {
  const dispatch = useDispatch()
  const employees = useSelector(selectEmployees)
  const sortedBy = useSelector(selectSortedBy)
  const showEntries = useSelector(selectShowEntries)
  const countPaginations = useSelector(selectCountPaginations)
  const currentPagination = useSelector(selectCurrentPagination)
  const entries = useSelector(selectEntries)
  const searchValue = useSelector(selectSearch)
  const showing = useSelector(selectShowing)

  // Goal ["dateOfBirth"] => ["Date Of Birth"]
  const HandleTitlesFormat = (data) =>
    data.map((phrase) =>
      phrase
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase())
    )

  const computePaginationNavClassName = (pagination) =>
    currentPagination === pagination ? 'selected' : 'available'

  const previousPaginationClassName = `pagination-previous ${
    currentPagination === 1 ? 'disabled' : 'available'
  }`

  const nextPaginationClassName = `pagination-next ${
    currentPagination === countPaginations ? 'disabled' : 'available'
  }`

  const handlePrevious = () => {
    if (currentPagination !== 1) {
      dispatch(setCurrentPagintation(currentPagination - 1))
    }
  }
  const handleNext = () => {
    if (currentPagination !== countPaginations) {
      dispatch(setCurrentPagintation(currentPagination + 1))
    }
  }

  return (
    <section className="list-employee">
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <section className="table-header">
          <div className="show-entries-container">
            <label htmlFor="show">Show</label>
            <select
              id="show"
              value={showEntries}
              onChange={(e) => dispatch(setShowEntries(e.target.value))}
            >
              <option>5</option>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>entries</span>
          </div>
          <div className="search-container">
            <label htmlFor="search">Search:</label>
            <input
              id="search"
              name="search"
              value={searchValue}
              onChange={(e) => dispatch(search(e.target.value))}
            ></input>
          </div>
        </section>
        <table id="employee-table" className="display">
          <thead>
            <tr>
              {HandleTitlesFormat(Object.keys(employees[0])).map(
                (title, index) => (
                  <th
                    key={`title-${index}`}
                    onClick={() =>
                      dispatch(sort(Object.keys(employees[0])[index]))
                    }
                  >
                    <span>{title}</span>
                    {sortedBy.name === Object.keys(employees[0])[index] ? (
                      <img
                        src={sortedBy.type === 'ASC' ? arrowUp : arrowDown}
                        alt={`sorting order ${sortedBy.type}`}
                      ></img>
                    ) : (
                      <span className="empty"></span>
                    )}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {entries.map((employee, index) => (
              <tr key={`employee-${index}`}>
                {Object.keys(employee).map((key) => (
                  <td key={`${key}-${index}`}>{employee[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <section className="table-footer">
          <span className="showing-entries-container">
            {showing}
          </span>
          <div className="paginations-container">
            <span
              className={previousPaginationClassName}
              onClick={handlePrevious}
            >
              {"<"}
            </span>
            {Array(countPaginations)
              .fill()
              .map((item, index) => (
                <button
                  key={`pagination-${index}`}
                  className={computePaginationNavClassName(index + 1)}
                  onClick={() => dispatch(setCurrentPagintation(index + 1))}
                >
                  {index + 1}
                </button>
              ))}
            <span className={nextPaginationClassName} onClick={handleNext}>
              {">"}
            </span>
          </div>
        </section>

        <Link to="/">Home</Link>
      </div>
    </section>
  )
}

export default ListEmployee
