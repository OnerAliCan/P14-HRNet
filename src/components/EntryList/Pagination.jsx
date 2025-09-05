import { useEffect } from 'react'

export default function Pagination({
  page,
  setPage,
  filteredEntriesLength,
  showEntries,
}) {
  const maxPage = Math.ceil(filteredEntriesLength / showEntries)

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if (page < maxPage) {
      setPage(page + 1)
    }
  }

  // Ajuste la page automatiquement si elle dépasse maxPage ou si le filtre change
  useEffect(() => {
    if (page > maxPage) {
      setPage(maxPage || 1)
    }
    if (page < 1) {
      setPage(1)
    }
  }, [filteredEntriesLength, showEntries, maxPage, page, setPage])

  return (
    <>
      <button onClick={handlePrevious} disabled={page <= 1}>
        Previous
      </button>
      <span>{page}</span>
      <button onClick={handleNext} disabled={page >= maxPage}>
        Next
      </button>
    </>
  )
}
