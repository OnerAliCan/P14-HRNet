import { useSelector } from 'react-redux'
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Container,
  Typography,
  Paper,
} from '@mui/material'
import EmployeeRow from '../components/EmployeeRow'

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.list)

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Employee List
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Prénom</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Date de naissance</TableCell>
              <TableCell>Date de début</TableCell>
              <TableCell>Département</TableCell>
              <TableCell>Rue</TableCell>
              <TableCell>Ville</TableCell>
              <TableCell>État</TableCell>
              <TableCell>Zip Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp) => (
              <EmployeeRow key={emp.id} employee={emp} />
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  )
}
