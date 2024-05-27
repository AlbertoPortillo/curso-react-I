import React, {useState, useEffect} from 'react'
import { Grid, checkboxClasses, List  } from '@mui/material';

import Field from './Field';
import Todo from './Todo';

export default function ToDoList() {
    const [ lista, setLista] = React.useState([])
    //obtener lista para LocalStorage
    useEffect(() => {
        const lista_storage = JSON.parse(localStorage.getItem('lista'));
        if (lista_storage) {
            setLista(lista_storage);
        }
    }, [])
    //agregar elemento a la lista
    function addTask(newTask){
        const list_prueba = [...lista];
        list_prueba.push(newTask)
        saveList(list_prueba)
    }
    //borrar elementos de la lista
    function deleteFirstStep(key){
        const list_prueba = [...lista];
        list_prueba.splice(key, 1);
        saveList(list_prueba)
    }
    //guardar la lista en estado y Storage
    function saveList(list_param){
        setLista(list_param);
        localStorage.setItem('lista', JSON.stringify(list_param))
    }
  return (
    <Grid flex spacing={2} height={'60vh'} width={'50%'} marginLeft={'25%'} sx={{ bgcolor: 'gray' }}>
        <Grid xs={12} md={12} marginBottom={'5%'} marginLeft={'5%'} alignSelf={'center'}>
            <Field addTarea={addTask}/>
        </Grid>
        <Grid overflow={'scroll'} xs={12} height={'80%'} md={12} sx={{ paddingY: '5%' }}>
            <List sx={{ width: '100%' }}>
                {
                    lista.map((value, key) => (
                        <Todo 
                            texto={value}
                            key={`todoList-item-${key}`}
                            identificador={key}
                            deleteAction={deleteFirstStep}
                        />
                    ))
                }
            </List>
        </Grid>
    </Grid>
  )
}
