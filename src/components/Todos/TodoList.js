import styles from "./TodoList.module.css";
import Todo from "./Todo";

function TodoList({ array, funcDelTodo, updateFn }) {
  return (
    <div
      className={styles.todoList}
      onDoubleClick={(e) => {
        funcDelTodo(e);
      }}
    >
      {array.length > 0 ? (
        array.map((el, index) => (
          <Todo updateArrFn={updateFn} todoObj={el} key={el.id}></Todo>
        ))
      ) : (
        <h3 className="colored">To do List is empty!</h3>
      )}
    </div>
  );
}

export default TodoList;
