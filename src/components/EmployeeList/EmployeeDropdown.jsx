export default function EmployeeDropdown({ setShowEntries }) {
  console.log(setShowEntries)
  return (
    <>
      <label htmlFor="number-of-entries">Show</label>

      <select
        name="number-of-entries"
        id="number-of-entries"
        onChange={(e) => (
          (setShowEntries = e.target.value),
          console.log(setShowEntries)
        )}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <span>entries</span>
    </>
  )
}
