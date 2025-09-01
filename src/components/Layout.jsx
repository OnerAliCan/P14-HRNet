import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Container } from '@mui/material'

function Layout() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
