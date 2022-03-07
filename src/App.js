import { useState } from "react";

function App() {
  const TODOKEY = "todoKey";
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todoInput = (event) => {
    setTodo(event.target.value);
  };
  const todoSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodos((currentArray) => [todo, ...currentArray]);
    saveTodo();
  };

  const saveTodo = () => {
    localStorage.setItem(TODOKEY, JSON.stringify(todos));
  };
  const savedTodo = JSON.parse(localStorage.getItem(TODOKEY));
  console.log(savedTodo);
  // setTodos(savedTodo);

  const removeTodo = (event) => {
    const li = event.target.parentElement;
    li.remove();
  };

  return (
    <div>
      <form onSubmit={todoSubmit}>
        <input onChange={todoInput} value={todo} type="text" placeholder="write to-dos" />
        <input type="submit" value="submit" />
      </form>
      <ul>
        {todos.map((element, index) => (
          <li key={index}>
            {element}
            <button onClick={removeTodo}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
