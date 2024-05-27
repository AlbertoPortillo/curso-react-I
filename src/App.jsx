import React from 'react'
import {Box, Grid } from '@mui/material';


import Calculada from './components/Calculator/Calculadora';
import ToDoList from './components/TodoList/toDoList';

function App() {
  return (
    <Box justifyContent={'center'} alignItems={'center'} display={'flex'} height={'100vh'} width={'100vw'} sx={{ bgcolor: 'black' }}>
      <Grid height={'100vh'} container spacing={2}>
        <Grid xs={12} md={6} alignSelf={'center'}>
          <Calculada/> 
        </Grid>
        <Grid xs={12} md={6} alignSelf={'center'} >
          <ToDoList/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
