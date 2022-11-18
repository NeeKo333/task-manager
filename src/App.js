import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import { useState } from "react";
function App() {
  let [todoArr, setTodoArr] = useState([]);

  function addTodo(inputText) {
    setTodoArr([...todoArr, inputText]);
  }

  function delTodo(e) {
    const target = e.target;
    const newArr = todoArr.filter((_, i) => i !== +target.id);
    setTodoArr(newArr);
  }

  return (
    <div className="App">
      <div className="todoApp">
        <h1>Todo App by React</h1>
        <TodoForm funcAddNewTodo={addTodo}></TodoForm>
        <TodoList funcDelTodo={delTodo} array={todoArr}></TodoList>
      </div>
    </div>
  );
}

export default App;
