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

const createEmployeeSlice = createSlice({
  name: 'createEmployee',
  initialState: {
    employees: employees,
  },
  reducers: {
    add: (state, action) => {
      state.employees.push(action.payload)
    }
  },
})

export const { add } = createEmployeeSlice.actions

export default createEmployeeSlice.reducer

export const selectEmployees = (state) => state.employee.employees