import React from 'react'
import { useState } from 'react';

const TodoApp = () => {

  const [contador, setContador] = useState (0);







    console.log(contador);
    
    const mostrarNotas = () =>{
        console.log(notas)
    }
 
  return (
    <>
    <h1>contador</h1>
    <p>{contador}</p>
    <button onClick={() => setContador(contador + 1)}>+</button>
    <button onClick={() => setContador (contador - 1)}>-</button>

    </>
  )
}

export default TodoApp;
