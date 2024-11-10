import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo, mode }) => {
  const [orderedTodos, setOrderedTodos] = useState([]);

  useEffect(() => {
    setOrderedTodos(todos);
  }, [todos]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("todoIndex", index);
  };

  const handleDrop = (e, index) => {
    const draggedIndex = e.dataTransfer.getData("todoIndex");
    const newTodos = [...orderedTodos];

    const [draggedTodo] = newTodos.splice(draggedIndex, 1);

    newTodos.splice(index, 0, draggedTodo);

    setOrderedTodos(newTodos);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {orderedTodos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          mode={mode}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
        />
      ))}
    </div>
  );
};

export default TodoList;
