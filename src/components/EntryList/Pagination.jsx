import SelectPage from './SelectPage'

export default function Pagination({
  page,
  handlePrevious,
  handleNext,
  maxPage,
  setPage,
  pagesToShow,
}) {
  return (
    <>
      <button onClick={handlePrevious} disabled={page <= 1}>
        Previous
      </button>
      <SelectPage
        currentPage={page}
        onClick={setPage}
        pagesToShow={pagesToShow}
      />

      <button onClick={handleNext} disabled={page >= maxPage}>
        Next
      </button>
    </>
  )
}
