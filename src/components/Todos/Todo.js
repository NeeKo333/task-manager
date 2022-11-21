import { useState } from "react";
import { RiTodoFill } from "react-icons/ri";
import { MdDoneAll } from "react-icons/md";
import styles from "./Todo.module.css";
function Todo({ todoObj, updateArrFn }) {
  const [todoState, setTodoState] = useState(todoObj);
  const [classTodo, setClassTodo] = useState(styles.todoCard);
  const [doneIconClass, setDoneIconClass] = useState(styles.todoDone);
  return (
    <h3 id={todoObj.id} className={classTodo}>
      <RiTodoFill className={styles.todoIcon}></RiTodoFill>
      <MdDoneAll
        className={doneIconClass}
        onClick={() => {
          if (!todoState.ended) {
            setDoneIconClass(styles.todoDoneEnd);
            todoState.ended = true;
            setClassTodo(styles.todoCardEnded);
          } else {
            setDoneIconClass(styles.todoDone);
            todoState.ended = false;
            setClassTodo(styles.todoCard);
          }

          setTodoState(todoState);
          updateArrFn();
        }}
      ></MdDoneAll>
      {todoObj.Text}
    </h3>
  );
}

export default Todo;
