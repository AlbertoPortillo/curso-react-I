import React from 'react'
import { Grid, Typography } from '@mui/material';
export default function Botton({ texto, accion, size }) {
  return (
      <Typography height={'20%'} width={1} alignSelf={'center'} noWrap variant="h1" textAlign={'center'} align='center' >
          {texto}
      </Typography>
    
  )
}
