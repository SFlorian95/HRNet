import { configureStore } from '@reduxjs/toolkit'
import createEmployeeReducer from './features/employeeSlice'

export default configureStore({
    reducer: {
        createEmployee: createEmployeeReducer
    }
})