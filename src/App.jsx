import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CreateEmployee />} />
          <Route path="employees" element={<EmployeeList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
