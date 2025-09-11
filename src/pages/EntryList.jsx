import List from '../components/EntryList/List'
import '../styles/entry-list.scss'
import { useSelector } from 'react-redux'
import tableHeaders from '../data/tableHeaders'
import { Container } from '@mui/material'

export default function EntryList() {
  // hook redux pour acceder au store redux
  const entries = useSelector((state) => state.entries.list)
  return (
    <Container maxWidth="xl" disableGutters sx={{ maxWidth: '1440px' }}>
      <h4>Employees List</h4>
      <List entries={entries} tableHeaders={tableHeaders} />
    </Container>
  )
}
