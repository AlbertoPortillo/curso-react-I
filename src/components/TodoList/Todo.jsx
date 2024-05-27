import React from 'react'
import { Typography, Box, Button, ListItem, ListItemText } from '@mui/material';

export default function Todo({ texto, identificador, deleteAction }) {

  return (
    <ListItem 
      key={`item-lista-${identificador}`} 
    >
        <ListItemText>
          <Typography sx={{ fontSize: 'h5.fontSize' }}>{texto}</Typography>
        </ListItemText>
        <Button onClick={() => deleteAction(identificador)} sx={{ width: '30%' }} variant="contained">Borrar</Button>
    </ListItem>
  )
}
