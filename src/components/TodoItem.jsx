import React from "react";

const TodoItem = ({
  todo,
  toggleComplete,
  deleteTodo,
  mode,
  index,
  handleDragStart,
  handleDrop,
}) => {
  return (
    <div
      className={`flex items-center justify-between ${
        mode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } p-3 rounded-lg mb-2 shadow-lg hover:shadow-xl group`}
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDrop={(e) => handleDrop(e, index)}
      onDragOver={(e) => e.preventDefault()}
    >
      <div
        onClick={() => toggleComplete(todo.id)}
        className="cursor-pointer flex items-center justify-center h-6 w-6 rounded-full"
        style={{
          background:
            "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
          border: "2px solid transparent",
          borderRadius: "9999px",
          backgroundClip: "padding-box",
          boxSizing: "border-box",
        }}
      >
        {todo.completed ? (
          <img src="../assets/images/icon-check.svg" alt="Completed" />
        ) : (
          <div
            className="h-4 w-4 rounded-full bg-white"
            style={{
              backgroundClip: "border-box",
              boxSizing: "border-box",
            }}
          ></div>
        )}
      </div>
      <span
        className={`flex-1 ml-3 ${
          todo.completed ? "line-through opacity-60" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className={`${
          mode ? "text-gray-400" : "text-gray-800"
        } invisible group-hover:visible`}
      >
        ✕
      </button>
    </div>
  );
};

export default TodoItem;
