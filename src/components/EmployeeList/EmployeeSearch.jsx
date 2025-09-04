import { useState } from 'react'

export default function EmployeeSearch({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
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
