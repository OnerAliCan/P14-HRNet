import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          HRNet
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            CREATE EMPLOYEE
          </Button>
          <Button color="inherit" component={Link} to="/entries">
            EMPLOYEE LIST
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
