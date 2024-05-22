import React from 'react'
import { Grid, Box, Button  } from '@mui/material'
import { blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


export default function Botton({ texto, accion, doble }) {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blueGrey[700]),
        width: doble ?'48%' :'23%',
        margin: '1%',
        fontSize: '2rem',
        padding: 0,
        backgroundColor: blueGrey[700],
        '&:hover': {
          backgroundColor: blueGrey[900],
        },
    }));
  return (
    <ColorButton onClick={() => accion(texto) } doble >{texto}</ColorButton>
  )
}
