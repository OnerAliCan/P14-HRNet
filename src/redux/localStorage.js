export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('entriesState')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.warn('Failed to load state from localStorage', e)
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('entriesState', serializedState)
  } catch (e) {
    console.warn('Failed to save state to localStorage', e)
  }
}
