import { useState } from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import NavBar from './components/navbar/Navbar'
import Body from './components/body/Body';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar/>
      <Body/>
    </Box>
  )
}

export default App
