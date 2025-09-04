export default function EntryNumber({ filteredNumber, totalNumber }) {
  if (filteredNumber < totalNumber) {
    return (
      <>
        {' '}
        Showing {filteredNumber} to x of {totalNumber} entries (filtered from{' '}
        {totalNumber} entries)
      </>
    )
  }
  return (
    <>
      Showing {filteredNumber} to x of {totalNumber} entries
    </>
  )
}
