import './App.css'
import { Container, Typography } from '@mui/material'

function App() {

  return (
    <Container maxWidth="sm" sx={{bgcolor: 'tomato', height: '100vh'}}>
      <Typography sx={{p:1}}>Hello World !</Typography>
    </Container>
  )
}

export default App
