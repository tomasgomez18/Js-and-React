import "./App.css";
import TodoApp from "./components/TodoApp";
import { useState } from "react";

function App() {
const notas = [
  {
  id: crypto.randomUUID(),
  text:'Soy la nota 1',
},
{
  id: crypto.randomUUID(),
  text:'Soy la nota 2',
},
];

/* const tituloApp = {
    tituloApp: 'Soy todo App',
    subtituloApp:'Soy subtitulo App'
} */
return (
  <section className="containerTodoApp">
                <TodoApp notas={notas}></TodoApp>
  </section>
);
}

export default App;
