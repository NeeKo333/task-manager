import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import Buttons from "./components/UI/Buttons";
import { ImBin, ImBriefcase } from "react-icons/im";
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
  function setTodoAsEnded(ident) {
    const newArr = todoArr.map((el) => {
      if (el.id === ident) {
        if (!el.ended) {
          el.ended = true;
        } else {
          el.ended = false;
        }
      }
      return el;
    });
    setTodoArr(newArr);
  }

  function delEndedTodos() {
    const newArr = todoArr.filter((el) => el.ended === false);
    setTodoArr(newArr);
  }
  function delAllTodos() {
    setTodoArr([]);
  }

  let endedElLength = todoArr.filter((el) => el.ended).length;

  return (
    <div className="App">
      <div className="wrapper">
        <div className="todoApp">
          <h2>Tasks</h2>
          <TodoForm funcAddNewTodo={addTodo}></TodoForm>
          {todoArr.length > 0 && (
            <div className="todoButtons">
              <Buttons
                title="Delete ended tasks!"
                changeTodosFn={delEndedTodos}
              >
                <ImBriefcase></ImBriefcase>
              </Buttons>
              <Buttons title="Delete all tasks!" changeTodosFn={delAllTodos}>
                <ImBin></ImBin>
              </Buttons>
            </div>
          )}

          <TodoList
            funcDelTodo={delTodo}
            funcSetTodoAsEnded={setTodoAsEnded}
            array={todoArr}
          ></TodoList>

          {todoArr.length > 0 ? (
            endedElLength > 0 ? (
              <h4 className="colored">{endedElLength} task ended!</h4>
            ) : (
              <h4 className="colored">No ended tasks!</h4>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
