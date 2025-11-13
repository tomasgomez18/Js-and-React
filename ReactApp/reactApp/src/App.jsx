import "./App.css";
import TodoApp from "./components/TodoApp";


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
return (
  <section className="containerTodoApp">
                <TodoApp notas={notas}></TodoApp>
  </section>
);
}

export default App;
