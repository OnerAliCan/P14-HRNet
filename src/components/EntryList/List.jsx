// component qui va chapeauter les autres sous-components (à la maniere du component CreateEntryForm)
import { useState } from 'react'
import { useSelector } from 'react-redux'
import EntryRow from './EntryRow'
import SortingTableHeaders from './SortingTableHeaders'
import EntrySearch from './EntrySearch'
import EntryNumber from './EntryNumber'
import EntriesDropdown from './EntriesDropdown'
import Pagination from './Pagination'
import dropdownOptions from '../../data/dropdownOptions'

export default function List() {
  const entries = useSelector((state) => state.entries.list)

  // INITIALISATION DE STATES
  const [searchQuery, setSearchQuery] = useState('')

  //Nombre d'entrées initialisé à 10
  const [dropdownSelectedOption, setDropdownSelectedOption] = useState(10)

  // Page initialisée sur 1
  const [page, setPage] = useState(1)

  // Tri par défaut sur "Prénom"
  const [sortConfig, setSortConfig] = useState({
    key: 'firstName',
    direction: 'asc',
  })

  // Création d'une copie pour trier
  let sortedEntries = [...entries]

  // TRIAGE

  if (sortConfig.key) {
    sortedEntries.sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]

      // Comparer texte
      if (typeof aValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      }

      // Comparer nombres
      if (typeof aValue === 'number') {
        return sortConfig.direction === 'asc'
          ? aValue - bValue
          : bValue - aValue
      }

      // Comparer dates
      if (aValue instanceof Date || !isNaN(Date.parse(aValue))) {
        return sortConfig.direction === 'asc'
          ? new Date(aValue) - new Date(bValue)
          : new Date(bValue) - new Date(aValue)
      }

      return 0
    })
  }

  // convertir l'objet filteredEntries en tableau de valeurs (stringifiées)
  let filteredEntries = sortedEntries.filter((entry) => {
    return Object.values(entry).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase()),
    )
  })

  const filteredEntriesLength = filteredEntries.length
  const totalNumberLength = sortedEntries.length
  // const entryNumberLength = setShowEntries.length

  // ENTRY ROWS SECTION

  return (
    <>
      <EntrySearch onSearch={setSearchQuery} setPage={setPage} />
      <EntriesDropdown
        dropdownOptions={dropdownOptions}
        dropdownSelectedOption={dropdownSelectedOption}
        setDropdownSelectedOption={setDropdownSelectedOption}
      />
      <table>
        <thead>
          <tr>
            <SortingTableHeaders
              sortConfig={sortConfig}
              setSortConfig={setSortConfig}
            />
          </tr>
        </thead>
        <tbody>
          {filteredEntries
            .slice(
              (page - 1) * dropdownSelectedOption,
              page * dropdownSelectedOption,
            )
            .map((entry) => {
              const formattedEntry = [
                entry.firstName,
                entry.lastName,
                new Date(entry.dateOfBirth).toLocaleDateString(),
                new Date(entry.startDate).toLocaleDateString(),
                entry.department,
                entry.street,
                entry.city,
                entry.state,
                entry.zipCode,
              ]
              return <EntryRow key={entry.id} rowData={formattedEntry} />
            })}
        </tbody>
      </table>
      <EntryNumber
        filteredEntriesLength={filteredEntriesLength}
        totalNumberLength={totalNumberLength}
        showEntries={dropdownSelectedOption}
        page={page}
      />
      <Pagination
        page={page}
        setPage={setPage}
        filteredEntriesLength={filteredEntriesLength}
        showEntries={dropdownSelectedOption}
      />
    </>
  )
}
