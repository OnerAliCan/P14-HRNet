export default function EntriesDropdown({
  dropdownOptions,
  dropdownSelectedOption,
  onChange,
}) {
  return (
    <>
      <label htmlFor="number-of-entries">Show</label>

      <select
        name="number-of-entries"
        id="number-of-entries"
        value={dropdownSelectedOption}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {dropdownOptions.map((dropdownOption) => (
          <option key={dropdownOption} value={dropdownOption}>
            {dropdownOption}
          </option>
        ))}
      </select>
      <span>entries</span>
    </>
  )
}
