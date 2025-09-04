/* eslint-disable indent */
export default function EntryNumber({
  filteredEmployeesLength,
  totalNumberLength,
  showEntries,
  page,
}) {
  // console.log('filteredEmployeesLength', filteredEmployeesLength)
  // console.log('totalNumberLength', totalNumberLength)
  // console.log('showEntries', showEntries)
  // console.log('page', page)
  // indice de la premiere entrée affichées (apres "Showing")
  const displayedNumber = showEntries * (page - 1) + 1
  // console.log(displayedNumber)
  // indice de la derniere entrée affichées (après "to")
  let totalPage = Math.min(showEntries * page, totalNumberLength)
  const lastDisplayedNumber = Math.min(
    showEntries * page,
    filteredEmployeesLength,
  )

  switch (true) {
    case filteredEmployeesLength < totalNumberLength:
      return (
        <>
          Showing {displayedNumber} to {lastDisplayedNumber} of{' '}
          {filteredEmployeesLength} entries (filtered from {totalNumberLength}{' '}
          total entries)
        </>
      )
    default:
      return (
        <>
          Showing {displayedNumber} to {totalPage} of {totalNumberLength}{' '}
          entries
        </>
      )
  }
}
