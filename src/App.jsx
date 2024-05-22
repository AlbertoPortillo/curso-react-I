import { useState } from 'react'
import {Box, Grid, CssBaseline } from '@mui/material';

import NavBar from './components/navbar/Navbar';
import Body from './components/body/Body';

import Calculada from './components/Calculator/Calculadora';

function App() {
  return (
    <Box justifyContent={'center'} alignItems={'center'} display={'flex'} height={'100vh'} width={'100vw'} sx={{ bgcolor: 'black' }}>
      <Calculada/> 
    </Box>
  )
}

export default App
