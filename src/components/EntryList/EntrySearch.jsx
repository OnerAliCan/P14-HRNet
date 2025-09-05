import { useState } from 'react'

export default function EntrySearch({ onSearch, setPage }) {
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
      placeholder="Search entries..."
      value={query}
      onChange={handleChange}
    />
  )
}
