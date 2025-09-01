import { createSlice } from '@reduxjs/toolkit'
import employeesMock from '../data/employeesMock.json'

const initialState = {
  list: employeesMock,
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload)
    },
  },
})

export const { addEmployee } = employeesSlice.actions
export default employeesSlice.reducer
