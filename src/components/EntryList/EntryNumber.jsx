/* eslint-disable indent */
export default function EntryNumber({
  filteredEntriesLength,
  totalNumberLength,
  showEntries,
  page,
}) {
  // console.log('filteredEntriesLength', filteredEntriesLength)
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
    filteredEntriesLength,
  )

  switch (true) {
    case filteredEntriesLength < totalNumberLength:
      return (
        <>
          Showing {displayedNumber} to {lastDisplayedNumber} of{' '}
          {filteredEntriesLength} entries (filtered from {totalNumberLength}{' '}
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
