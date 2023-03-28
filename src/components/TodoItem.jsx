import React from "react";

function TodoItem({ item, onDelete }) {
  return (
    <li className="todo-item">
      {item}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
