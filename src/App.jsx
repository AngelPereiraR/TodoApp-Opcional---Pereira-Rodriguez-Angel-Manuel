import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [mode, setMode] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detectar cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const toggleMode = () => {
    setMode(!mode);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const remainingItems = todos.filter((todo) => !todo.completed).length;

  return (
    <div
      className={`flex flex-col items-center min-h-screen ${
        mode ? "bg-gray-900" : "bg-gray-100"
      } text-white p-6 relative`}
    >
      <div
        className={`w-screen h-1/4 bg-cover bg-center absolute top-0 left-0 ${
          isMobile
            ? mode
              ? 'bg-[url("../assets/images/bg-mobile-dark.jpg")]'
              : 'bg-[url("../assets/images/bg-mobile-light.jpg")]'
            : mode
            ? 'bg-[url("../assets/images/bg-desktop-dark.jpg")]'
            : 'bg-[url("../assets/images/bg-desktop-light.jpg")]'
        }`}
        style={{ height: isMobile ? "220px" : "230px" }}
      ></div>

      <div className="relative w-screen max-w-md mt-1/4">
        <Header toggleMode={toggleMode} mode={mode} />
        <TodoInput addTodo={addTodo} mode={mode} />
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          mode={mode}
        />
        <Footer
          remainingItems={remainingItems}
          clearCompleted={clearCompleted}
          filter={filter}
          setFilter={setFilter}
          mode={mode}
        />
      </div>
    </div>
  );
}

export default App;
