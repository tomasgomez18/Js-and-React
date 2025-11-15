import React from 'react'
import { useState } from 'react';

function TodoApp ()  {

  const notass = [{
      id: crypto.randomUUID(),
      text: 'Soy la nota 1',
  },
{
   id: crypto.randomUUID(),
      text: 'Soy la nota 1',
}
];
const [notas, setNotas] = useState(notass);
 
 
  return (
    <>
        <h1>Notas</h1>
        <ul>
          <li>{notas [0].text }</li>
          <li>{notas [1].text}</li>
    </ul>
    </>
  )
}

export default TodoApp;
