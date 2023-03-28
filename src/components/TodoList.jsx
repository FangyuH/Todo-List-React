import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
  const [items, setItems] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleSubmit = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
    setHistory([...history, newItems]);
    setHistoryIndex(history.length);
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    setHistory([...history, newItems]);
    setHistoryIndex(history.length);
  };

  const handleForward = () => {
    const index = historyIndex + 1;
    if (index < history.length) {
      setItems(history[index]);
      setHistoryIndex(index);
    }
  };

  const handleBack = () => {
    const index = historyIndex - 1;
    if (index >= 0) {
      setItems(history[index]);
      setHistoryIndex(index);
    }
  };

  return (
    <div className="todo-list">
      <TodoForm onSubmit={handleSubmit} />
      <ul>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
      <div className="buttons">
        <button id="back-btn" onClick={handleBack}>
          Back
        </button>
        {historyIndex < history.length - 1 && (
          <button onClick={handleForward}>Forward</button>
        )}
      </div>
    </div>
  );
}

export default TodoList;
