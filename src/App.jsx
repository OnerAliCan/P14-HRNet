import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateEntry from './pages/CreateEntry'
import EntryList from './pages/EntryList'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CreateEntry />} />
          <Route path="entries" element={<EntryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
