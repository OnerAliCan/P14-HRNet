import { useState } from 'react'

export default function EmployeeRow({ employee }) {
  const employeeData = [
    employee.firstName,
    employee.lastName,
    new Date(employee.dateOfBirth).toLocaleDateString(),
    new Date(employee.startDate).toLocaleDateString(),
    employee.department,
    employee.street,
    employee.city,
    employee.state,
    employee.zipCode,
  ]

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  let sortedEmployees = [...employeeData]

  if (sortConfig.key) {
    sortedEmployees.sort((a, b) => {
      let aValue = a[sortConfig.key]
      let bValue = b[sortConfig.key]

      // Cas dates
      if (sortConfig.key === 'dateOfBirth' || sortConfig.key === 'startDate') {
        aValue = new Date(aValue).getTime()
        bValue = new Date(bValue).getTime()
      }

      // Cas nombres
      if (sortConfig.key === 'zipCode') {
        aValue = Number(aValue)
        bValue = Number(bValue)
      }

      // Comparaison pour chaînes de caractères et nombres/dates
      if (typeof aValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      } else {
        return sortConfig.direction === 'asc'
          ? aValue - bValue
          : bValue - aValue
      }
    })
  }

  return (
    <tr className="employee-row">
      {employeeData.map((item, index) => (
        <td key={index}>{item}</td>
      ))}
    </tr>
  )
}
