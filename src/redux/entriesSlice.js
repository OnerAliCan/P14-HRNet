import { createSlice } from '@reduxjs/toolkit'
import entriesMock from '../data/entriesMock.json'

const initialState = {
  list: entriesMock,
}

export const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.list.push(action.payload)
    },
  },
})

export const { addEntry } = entriesSlice.actions
export default entriesSlice.reducer
