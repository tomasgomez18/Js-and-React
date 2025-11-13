import React from 'react'

const TodoApp = ({notas}) => {

  return (
    <>
    <h1>App de notas</h1>
    <ul>
        <li>{notas[0].text}</li>
        <li>{notas[1].text}</li>
    </ul>
    </>
  )
}

export default TodoApp;
