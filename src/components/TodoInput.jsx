import React, { useState } from "react";

const TodoInput = ({ addTodo, mode }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        placeholder="Currently typing"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`w-full p-3 rounded-lg ${
          mode ? "bg-gray-700 text-white" : "bg-white-900 text-gray-700"
        }  placeholder-gray-400 focus:outline-none`}
      />
    </form>
  );
};

export default TodoInput;
