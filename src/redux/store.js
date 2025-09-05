import { configureStore } from '@reduxjs/toolkit'
import entriesReducer from './entriesSlice'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

export const store = configureStore({
  reducer: {
    entries: entriesReducer,
  },
  preloadedState: persistedState,
})

store.subscribe(() => {
  saveState({
    entries: store.getState().entries,
  })
})
