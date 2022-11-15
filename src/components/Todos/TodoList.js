import styles from "./TodoList.module.css";
import Todo from "./Todo";

function TodoList({ array, funcDelTodo }) {
  return (
    <div
      className={styles.todoList}
      onClick={(e) => {
        funcDelTodo(e);
      }}
    >
      {array.length > 0 ? (
        array.map((el, index) => (
          <Todo todoText={el} key={index} id={index}></Todo>
        ))
      ) : (
        <h3>To do List is empty!</h3>
      )}
    </div>
  );
}

export default TodoList;
