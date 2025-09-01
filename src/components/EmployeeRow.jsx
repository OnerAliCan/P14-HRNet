import { TableRow, TableCell } from '@mui/material'

export default function EmployeeRow({ employee }) {
  return (
    <TableRow>
      <TableCell>{employee.firstName}</TableCell>
      <TableCell>{employee.lastName}</TableCell>
      <TableCell>
        {new Date(employee.dateOfBirth).toLocaleDateString()}
      </TableCell>
      <TableCell>{new Date(employee.startDate).toLocaleDateString()}</TableCell>
      <TableCell>{employee.department}</TableCell>
      <TableCell>{employee.street}</TableCell>
      <TableCell>{employee.city}</TableCell>
      <TableCell>{employee.state}</TableCell>
      <TableCell>{employee.zipCode}</TableCell>
    </TableRow>
  )
}
