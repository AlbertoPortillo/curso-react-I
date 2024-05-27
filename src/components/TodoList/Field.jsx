import React, {useState} from 'react'
import { TextField, Box, Button } from '@mui/material';

export default function Field({addTarea}) {
  const [ tarea, setTarea ] = React.useState("")
   return (
    <Box marginLeft={'10%'} width={'80%'} display="flex" alignItems="center" sx={{ paddingTop: '5%' }}>
        <TextField value={tarea} onChange={(event) => setTarea(event.target.value)} sx={{ width: '70%', paddingRight:"10%" }} id="outlined-basic" label="Anota tu Tarea Aqui" variant="outlined" />
        <Button onClick={() => {addTarea(tarea); setTarea("") }} sx={{ width: '30%' }} variant="contained">Guardar</Button>
    </Box>
  )
}
