import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import Buttons from "./components/UI/Buttons";
import { useState } from "react";
function App() {
  let [todoArr, setTodoArr] = useState([]);

  function addTodo(inputText) {
    const randomId = Math.floor(Math.random() * 10000);
    const obj = {
      Text: inputText,
      id: randomId,
      ended: false,
    };
    setTodoArr([...todoArr, obj]);
  }

  function delTodo(e) {
    const target = e.target;
    const newArr = todoArr.filter((el) => el.id !== +target.id);
    setTodoArr(newArr);
  }

  function delEndedTodos() {
    const newArr = todoArr.filter((el) => el.ended === false);
    setTodoArr(newArr);
  }
  function delAllTodos() {
    setTodoArr([]);
  }

  return (
    <div className="App">
      <div className="todoApp">
        <h1>Todo App by React</h1>
        <TodoForm funcAddNewTodo={addTodo}></TodoForm>
        <Buttons changeTodosFn={delEndedTodos}>Delete ended todos!</Buttons>
        <Buttons changeTodosFn={delAllTodos}>Delete all todos!</Buttons>
        <TodoList funcDelTodo={delTodo} array={todoArr}></TodoList>
      </div>
    </div>
  );
}

export default App;
