import List from '../components/EntryList/List'
import '../styles/entry-list.scss'
import { useSelector } from 'react-redux'
import tableHeaders from '../data/tableHeaders'

export default function EntryList() {
  // hook redux pour acceder au store redux
  const entries = useSelector((state) => state.entries.list)
  return (
    <div>
      <h4>Entry List</h4>
      <List entries={entries} tableHeaders={tableHeaders} />
    </div>
  )
}
