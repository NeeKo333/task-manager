import { useState } from "react";
import { RiTodoFill } from "react-icons/ri";
import { MdDoneAll } from "react-icons/md";
import styles from "./Todo.module.css";
function Todo({ todoObj, funcSetTodoAsEnded }) {
  const [classTodo, setClassTodo] = useState(styles.todoCard);
  const [doneIconClass, setDoneIconClass] = useState(styles.todoDone);
  return (
    <h3 id={todoObj.id} className={classTodo}>
      <RiTodoFill className={styles.todoIcon}></RiTodoFill>
      <MdDoneAll
        className={doneIconClass}
        onClick={() => {
          if (!todoObj.ended) {
            setDoneIconClass(styles.todoDoneEnd);
            setClassTodo(styles.todoCardEnded);
          } else {
            setDoneIconClass(styles.todoDone);
            setClassTodo(styles.todoCard);
          }
          funcSetTodoAsEnded(todoObj.id);
        }}
      ></MdDoneAll>
      {todoObj.Text}
    </h3>
  );
}

export default Todo;
