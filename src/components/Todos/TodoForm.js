import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ funcAddNewTodo }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <form className={styles.formTodo}>
      <input
        className="input"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        placeholder="Write to do..."
        value={inputValue}
      ></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          funcAddNewTodo(inputValue);
          setInputValue("");
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
