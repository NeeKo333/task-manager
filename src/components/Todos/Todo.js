import { RiTodoFill } from "react-icons/ri";
import { MdDoneAll } from "react-icons/md";
import styles from "./Todo.module.css";
function Todo({ todoObj, funcSetTodoAsEnded }) {
  return (
    <h3
      id={todoObj.id}
      className={`${styles.todoCard} ${
        todoObj.ended ? styles.todoCardEnded : ""
      } `}
    >
      <RiTodoFill className={styles.todoIcon}></RiTodoFill>
      <MdDoneAll
        className={`${styles.todoDone} ${
          todoObj.ended ? styles.todoDoneEnd : ""
        }`}
        onClick={() => funcSetTodoAsEnded(todoObj.id)}
      ></MdDoneAll>
      {todoObj.Text}
    </h3>
  );
}

export default Todo;
