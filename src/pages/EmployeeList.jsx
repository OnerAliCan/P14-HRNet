import { useState } from 'react'
import { useSelector } from 'react-redux'
import EmployeeRow from '../components/EmployeeList/EmployeeRow'
import SortingTableHeaders from '../components/EmployeeList/SortingTableHeaders'
import EmployeeSearch from '../components/EmployeeList/EmployeeSearch'
import EntryNumber from '../components/EmployeeList/EntryNumber'
import EmployeeDropdown from '../components/EmployeeList/EmployeeDropdown'
import '../styles/employee-list.scss'

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.list)
  const [searchQuery, setSearchQuery] = useState('')

  //Nombre d'entrées initialisé à 10
  const [showEntries, setShowEntries] = useState(10)
  console.log(showEntries)

  // Tri par défaut sur "Prénom"
  const [sortConfig, setSortConfig] = useState({
    key: 'firstName',
    direction: 'asc',
  })

  // Création d'une copie pour trier
  let sortedEmployees = [...employees]

  if (sortConfig.key) {
    sortedEmployees.sort((a, b) => {
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

  // convertir l'objet filteredEmployees en tableau de valeurs (stringifiées)
  let filteredEmployees = sortedEmployees.filter((emp) => {
    return Object.values(emp).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase()),
    )
  })
  return (
    <div>
      <h4>Employee List</h4>
      <EmployeeSearch onSearch={setSearchQuery} />
      <EmployeeDropdown setShowEntries={setShowEntries} />
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
          {filteredEmployees.map((emp) => (
            <EmployeeRow key={emp.id} employee={emp} />
          ))}
        </tbody>
      </table>
      <EntryNumber
        filteredNumber={filteredEmployees.length}
        totalNumber={sortedEmployees.length}
      />
    </div>
  )
}
