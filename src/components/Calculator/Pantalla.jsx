import React from 'react'
import { Grid, Typography } from '@mui/material';
export default function Botton({ texto, height = '20%' }) {
  return (
      <Typography height={height} width={1} alignSelf={'center'} noWrap variant="h1" textAlign={'center'} align='center' >
          {texto}
      </Typography>
    
  )
}
