import React, { useEffect } from 'react'
import {Grid, TextField} from '@mui/material'

import Botton from './Botton'
import Pantalla from './Pantalla'

export default function Calculadora() {
    const [result, setResult] = React.useState('');
    const [beforeValue, setbeforeValue] = React.useState(0);
    const [operator, setOperator] = React.useState(null);
    const [finish, setFinish] = React.useState(false)
    

    //1 + 1 = 3
    function onCambio(key){
        if(finish){
            setFinish(false)
            setResult(key)
        }else{
            setResult(result + key)
        }
    }

    //agregar un useEffect para escuchar las teclas *Solo numeros*

    function pressOperador(key){
        if(operator){
            console.log('theres operator before')
            if(operator == "-"){
                setbeforeValue(beforeValue - Number(result))
                setOperator(key)
                setResult('')
            }else if(operator == "+"){
                setbeforeValue(Number(result) + beforeValue)
                setOperator(key)
                setResult('')

            }else if(operator == "x"){
                setbeforeValue(Number(result) * beforeValue)
                setOperator(key)
                setResult('')

            }else if(operator == "/"){
                setbeforeValue(beforeValue / Number(result) )
                setOperator(key)
                setResult('')

            }
        }else{
            setOperator(key)
            setbeforeValue(Number(result))
            setResult('')
        }
    }

    function limpiar(){
        setResult('')
        setOperator(null)
        setbeforeValue(0)
    }
    
    function pressFinish(){
        setFinish(true)
        if(operator == "-"){
            setResult(beforeValue - Number(result))
            setbeforeValue(null)
            setOperator(null)
        }else if(operator == "+"){
            setResult(Number(result) + beforeValue)
            setbeforeValue(null)
            setOperator(null)
        }else if(operator == "x"){
            setResult(Number(result) * beforeValue)
            setbeforeValue(null)
            setOperator(null)
        }else if(operator == "/"){
            setResult(beforeValue / Number(result) )
            setbeforeValue(null)
            setOperator(null)
        }
    }

    return (
        <Grid container spacing={2} marginLeft={'25%'} height={'50vh'} width={'40%'} sx={{ bgcolor: 'gray' }} >

            <Pantalla texto={result} />

            <Botton accion={onCambio} texto="1" />
            <Botton accion={onCambio} texto="2" />
            <Botton accion={onCambio} texto="3" />
            <Botton accion={pressOperador} texto="+" />

            <Botton accion={onCambio} texto="4" />
            <Botton accion={onCambio} texto="5" />
            <Botton accion={onCambio} texto="6" />
            <Botton accion={pressOperador} texto="-" />

            <Botton accion={onCambio} texto="7" />
            <Botton accion={onCambio} texto="8" />
            <Botton accion={onCambio} texto="9" />
            <Botton accion={pressOperador} texto="x" />

            <Botton accion={limpiar} texto="C" />
            <Botton accion={onCambio} texto="0"  />
            <Botton accion={pressFinish} texto="=" />
            <Botton accion={pressOperador} texto="/"  />

        </Grid>
    )
}
