import { createSlice } from '@reduxjs/toolkit'

const employees = [
  {
    firstName: 'sdsds',
    lastName: 'dfsfsfs',
    dateOfBirth: '01/22/1990',
    startDate: '09/13/2010',
    department: 'Sales',
    street: 'qdqsd',
    city: 'gfgfg',
    state: 'AL',
    zipCode: '11',
  },
  {
    firstName: 'a',
    lastName: 'z',
    dateOfBirth: '01/22/1990',
    startDate: '09/13/2010',
    department: 'Sales',
    street: 'qdqsd',
    city: 'gfgfg',
    state: 'AL',
    zipCode: '11',
  },
  {
    firstName: 'b',
    lastName: 'r',
    dateOfBirth: '01/22/1990',
    startDate: '09/13/2010',
    department: 'Sales',
    street: 'qdqsd',
    city: 'gfgfg',
    state: 'AL',
    zipCode: '11',
  },
  {
    firstName: 'y',
    lastName: 'n',
    dateOfBirth: '01/22/1990',
    startDate: '09/13/2010',
    department: 'Sales',
    street: 'qdqsd',
    city: 'gfgfg',
    state: 'AL',
    zipCode: '11',
  },
  {
    firstName: 'dfsd',
    lastName: 'hjj',
    dateOfBirth: '01/22/1990',
    startDate: '09/13/2010',
    department: 'Sales',
    street: 'qdqsd',
    city: 'gfgfg',
    state: 'AL',
    zipCode: '11',
  },
  {
    firstName: 'yyy',
    lastName: 'ggg',
    dateOfBirth: '01/22/1981',
    startDate: '09/13/2020',
    department: 'Marketing',
    street: 'qdqsd',
    city: 'gfgfg',
    state: 'AL',
    zipCode: '11',
  },
  {
    firstName: 'mmmm',
    lastName: 'gg',
    dateOfBirth: '01/22/1998',
    startDate: '09/13/2021',
    department: 'Sales',
    street: 'qdqsd',
    city: 'gfgfg',
    state: 'AL',
    zipCode: '2',
  },
  {
    firstName: 'oo',
    lastName: 'jj',
    dateOfBirth: '01/22/1980',
    startDate: '09/13/2000',
    department: 'Marketing',
    street: 'qdqsd',
    city: 'gfgfg',
    state: 'AL',
    zipCode: '1',
  },
]

const initEntries = () => employees.filter((item, index) => index < 5)

const computeEntries = (state) => {
  const startIndex = (state.currentPagination - 1) * state.showEntries
  const endIndex =
    state.currentPagination * state.showEntries > state.employees.length
      ? state.employees.length
      : state.currentPagination * state.showEntries

  const tempEmployees = state.searchValue
    ? state.employees.filter((item) =>
        atOnceKeyIncludesValue(state.searchValue, item)
      )
    : state.employees
  state.filteredLength = tempEmployees.length
  // compute pagination length
  state.countPaginations =
    Math.floor(tempEmployees.length / parseInt(state.showEntries)) + 1
  state.entries = tempEmployees.filter(
    (item, index) => index >= startIndex && index < endIndex
  )
  setShowing(state)
}

const atOnceKeyIncludesValue = (value, item) => {
  const keys = Object.keys(item)
  let result = false
  for (const key of keys) {
    if (item[key].toLowerCase().includes(value.toLowerCase())) {
      result = true
    }
  }
  return result
}

const setShowing = (state) => {
  const start = (state.currentPagination - 1) * state.showEntries + 1
  const paginationLength =
    state.currentPagination * state.showEntries > state.filteredLength
      ? state.filteredLength
      : state.currentPagination * state.showEntries
  const totalFiltered =
    state.filteredLength < state.employees.length
      ? `(filtered from ${state.employees.length} total entries)`
      : ''
  state.showing = `Showing ${start} to ${paginationLength} of ${state.filteredLength} entries ${totalFiltered}`
}

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: employees,
    sortedBy: { name: '', type: 'ASC' },
    showEntries: 5,
    countPaginations: Math.floor(employees.length / 5) + 1,
    currentPagination: 1,
    entries: initEntries(),
    searchValue: '',
    showing: `Showing 1 to 5 of ${employees.length} entries`,
    filteredLength: employees.length,
  },
  reducers: {
    add: (state, action) => {
      state.employees.push(action.payload)
      computeEntries(state)
    },
    sort: (state, action) => {
      const asc = (a, b) => (a[action.payload] > b[action.payload] ? 1 : -1)
      const desc = (a, b) => (a[action.payload] < b[action.payload] ? 1 : -1)
      let sortType = asc
      if (state.sortedBy.name === action.payload) {
        // toggle type
        sortType = state.sortedBy.type === 'ASC' ? desc : asc
        state.sortedBy.type = state.sortedBy.type === 'ASC' ? 'DESC' : 'ASC'
        state.employees.sort(sortType)
        state.sortedBy.name = action.payload
      } else {
        // default sort to ASC
        state.employees.sort(sortType)
        state.sortedBy.name = action.payload
        state.sortedBy.type = 'ASC'
      }
      // compute entries
      computeEntries(state)
    },
    setShowEntries: (state, action) => {
      state.showEntries = parseInt(action.payload)
      computeEntries(state)
    },
    setCurrentPagintation: (state, action) => {
      state.currentPagination = action.payload
      // compute entries
      computeEntries(state)
    },
    search: (state, action) => {
      state.searchValue = action.payload
      state.currentPagination = 1
      computeEntries(state)
    },
  },
})

export const { add, sort, setShowEntries, setCurrentPagintation, search } =
  employeeSlice.actions

export default employeeSlice.reducer

export const selectEmployees = (state) => state.employee.employees
export const selectSortedBy = (state) => state.employee.sortedBy
export const selectShowEntries = (state) => state.employee.showEntries
export const selectCountPaginations = (state) => state.employee.countPaginations
export const selectCurrentPagination = (state) =>
  state.employee.currentPagination
export const selectEntries = (state) => state.employee.entries
export const selectSearch = (state) => state.employee.searchValue
export const selectShowing = (state) => state.employee.showing