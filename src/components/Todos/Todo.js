import { RiTodoFill } from "react-icons/ri";
import styles from "./Todo.module.css";
function Todo({ todoText, id }) {
  return (
    <h3 id={id} className={styles.todoCard}>
      <RiTodoFill className={styles.todoIcon}></RiTodoFill>
      {todoText}
    </h3>
  );
}

export default Todo;
