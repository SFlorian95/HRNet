import { createSlice, nanoid } from '@reduxjs/toolkit'

const createEmployeeSlice = createSlice({
  name: 'createEmployee',
  initialState: [],
  reducers: {
    addEmployee: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (firstName, lastName) => {
        const id = nanoid()
        return {
          payload: { id, firstName, lastName },
        }
      },
    },
  },
})

export const { addEmployee } = createEmployeeSlice.actions

export default createEmployeeSlice.reducer