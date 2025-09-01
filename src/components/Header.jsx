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
            Create Employee
          </Button>
          <Button color="inherit" component={Link} to="/employees">
            Employee List
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
