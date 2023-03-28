import React, { useState } from "react";

function TodoForm({ onSubmit }) {
  const [currentItem, setCurrentItem] = useState("");

  const handleInputChange = (event) => {
    setCurrentItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentItem.trim() !== "") {
      onSubmit(currentItem);
      setCurrentItem("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={currentItem} onChange={handleInputChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
