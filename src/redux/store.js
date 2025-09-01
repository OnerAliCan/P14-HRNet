import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from './employeesSlice'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  preloadedState: persistedState,
})

store.subscribe(() => {
  saveState({
    employees: store.getState().employees,
  })
})
