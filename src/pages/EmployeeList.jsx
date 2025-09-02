import { useState } from 'react'
import { useSelector } from 'react-redux'
import EmployeeRow from '../components/EmployeeList/EmployeeRow'
import SortingTableHeaders from '../components/EmployeeList/SortingTableHeaders'
import '../styles/employee-list.scss'

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.list)

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

  return (
    <div>
      <h4>Employee List</h4>
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
          {sortedEmployees.map((emp) => (
            <EmployeeRow key={emp.id} employee={emp} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
