import React from "react";

function TodoList(props) {
  return (
    <li className="todolist-item">
        <input type="checkbox" />
        <div className="todo-text">
        <span>{props.value}</span>
        <span className="dots">...</span>
        </div>
    </li>
  );
}

export default TodoList;
