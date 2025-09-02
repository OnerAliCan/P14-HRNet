// src/pages/CreateEmployee.jsx
import { Container, Paper, Typography } from '@mui/material'
import CreateEmployeeForm from '../components/CreateEmployee/CreateEmployeeForm'

export default function CreateEmployee() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Create Employee
        </Typography>
        <CreateEmployeeForm />
      </Paper>
    </Container>
  )
}
