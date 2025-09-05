// src/pages/CreateEntry.jsx
import { Container, Paper, Typography } from '@mui/material'
import CreateEntryForm from '../components/CreateEntry/CreateEntryForm'

export default function CreateEntry() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Create Entry
        </Typography>
        <CreateEntryForm />
      </Paper>
    </Container>
  )
}
