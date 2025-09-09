// component qui va chapeauter les autres sous-components (à la maniere du component CreateEntryForm)
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import EntryRow from './EntryRow'
import SortingTableHeaders from './SortingTableHeaders'
import EntrySearch from './EntrySearch'
import EntryNumber from './EntryNumber'
import EntriesDropdown from './EntriesDropdown'
import Pagination from './Pagination'
import dropdownOptions from '../../data/dropdownOptions'
import tableHeaders from '../../data/tableHeaders'
import sortArrowBlank from '../../assets/sort-arrow-blank.svg'
import sortArrowUp from '../../assets/sort-arrow-up.svg'
import sortArrowDown from '../../assets/sort-arrow-down.svg'

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

  const handleSort = (columnKey) => {
    if (sortConfig.key === columnKey) {
      setSortConfig({
        key: columnKey,
        direction: sortConfig.direction === 'asc' ? 'desc' : 'asc',
      })
    } else {
      setSortConfig({ key: columnKey, direction: 'asc' })
    }
  }

  const headers = tableHeaders.map((tableHeader) => {
    let icon = sortArrowBlank
    if (sortConfig.key === tableHeader.key) {
      icon = sortConfig.direction === 'asc' ? sortArrowDown : sortArrowUp
    }

    return {
      label: tableHeader.label,
      key: tableHeader.key,
      onClick: () => handleSort(tableHeader.key),
      icon,
    }
  })

  const filteredEntriesLength = filteredEntries.length
  const totalNumberLength = sortedEntries.length
  // const entryNumberLength = setShowEntries.length

  //SECTION ENTRYNUMBER DROPDOWN

  // indice de la premiere entrée affichées (apres "Showing")
  const displayedNumber = dropdownSelectedOption * (page - 1) + 1
  // indice de la derniere entrée affichées (après "to")
  let lastDisplayedEntryIndex = Math.min(
    dropdownSelectedOption * page,
    totalNumberLength,
  )
  const lastDisplayedNumber = Math.min(
    dropdownSelectedOption * page,
    filteredEntriesLength,
  )

  const handleDropdownChange = (value) => {
    setDropdownSelectedOption(value)
    setPage(1)
  }

  // section search
  const handleChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    setPage(1)
  }

  // section pagination

  const maxPage = Math.ceil(filteredEntriesLength / dropdownSelectedOption)

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
  }, [maxPage, page, setPage])

  // TBODY FORMAT
  const formatEntry = (entry) => [
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

  const getDisplayedEntries = () =>
    filteredEntries
      .slice((page - 1) * dropdownSelectedOption, page * dropdownSelectedOption)
      .map(formatEntry)

  // SelectPage section

  let pagesToShow = []

  // Affiche toutes les pages si peu de pages
  if (maxPage <= 7) {
    pagesToShow = Array.from({ length: maxPage }, (_, i) => i + 1)
  } else {
    const first = 1
    const last = maxPage

    // Premieres pages
    if (page <= 4) {
      pagesToShow = [1, 2, 3, 4, 5, '...', last]
    }
    // dernieres pages
    else if (page >= maxPage - 3) {
      pagesToShow = [
        first,
        '...',
        maxPage - 4,
        maxPage - 3,
        maxPage - 2,
        maxPage - 1,
        last,
      ]
    }
    // pages du milieu
    else {
      pagesToShow = [first, '...', page - 1, page, page + 1, '...', last]
    }
  }

  return (
    <>
      <EntrySearch searchQuery={searchQuery} handleChange={handleChange} />
      <EntriesDropdown
        dropdownOptions={dropdownOptions}
        dropdownSelectedOption={dropdownSelectedOption}
        onChange={handleDropdownChange}
      />
      <table>
        <thead>
          <tr>
            <SortingTableHeaders headers={headers} />
          </tr>
        </thead>
        <tbody>
          {getDisplayedEntries().map((rowData, index) => (
            <EntryRow key={index} rowData={rowData} />
          ))}
        </tbody>
      </table>
      <EntryNumber
        filteredEntriesLength={filteredEntriesLength}
        totalNumberLength={totalNumberLength}
        displayedNumber={displayedNumber}
        lastDisplayedEntryIndex={lastDisplayedEntryIndex}
        lastDisplayedNumber={lastDisplayedNumber}
      />
      <Pagination
        page={page}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        maxPage={maxPage}
        setPage={setPage}
        pagesToShow={pagesToShow}
      />
    </>
  )
}
