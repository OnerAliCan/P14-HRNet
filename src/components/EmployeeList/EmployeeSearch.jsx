import { useState } from 'react'

export default function EmployeeSearch({ onSearch, setPage }) {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
    setPage(1)
  }
  return (
    <input
      type="text"
      placeholder="Search employees..."
      value={query}
      onChange={handleChange}
    />
  )
}
