/* eslint-disable indent */
export default function EntryNumber({
  filteredEntriesLength,
  totalNumberLength,
  displayedNumber,
  lastDisplayedEntryIndex,
  lastDisplayedNumber,
}) {
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
          Showing {displayedNumber} to {lastDisplayedEntryIndex} of{' '}
          {totalNumberLength} entries
        </>
      )
  }
}
