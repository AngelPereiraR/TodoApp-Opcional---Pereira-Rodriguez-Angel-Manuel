import React from "react";

const Footer = ({
  remainingItems,
  clearCompleted,
  filter,
  setFilter,
  mode,
}) => {
  return (
    <>
      <footer
        className={`flex flex-col items-center justify-between w-full max-w-md mx-auto mt-4 text-gray-400 p-4 rounded-lg ${
          mode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex justify-between w-full">
          <span>
            {remainingItems} item{remainingItems === 1 ? "" : "s"} left
          </span>
          <div className="space-x-3">
            <button
              onClick={() => setFilter("All")}
              className={`${
                mode ? "hover:text-white" : "hover:text-gray-800"
              } ${
                filter === "All"
                  ? "text-blue-500"
                  : mode
                  ? "text-gray-500"
                  : "text-gray-400"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("Active")}
              className={`${
                mode ? "hover:text-white" : "hover:text-gray-800"
              } ${
                filter === "Active"
                  ? "text-blue-500"
                  : mode
                  ? "text-gray-500"
                  : "text-gray-400"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("Completed")}
              className={`${
                mode ? "hover:text-white" : "hover:text-gray-800"
              } ${
                filter === "Completed"
                  ? "text-blue-500"
                  : mode
                  ? "text-gray-500"
                  : "text-gray-400"
              }`}
            >
              Completed
            </button>
          </div>
          <button
            onClick={clearCompleted}
            className={mode ? "hover:text-white" : "hover:text-gray-800"}
          >
            Clear Completed
          </button>
        </div>
      </footer>

      <p
        className={`mt-4 text-center text-sm ${
          mode ? "text-gray-500" : "text-gray-400"
        }`}
      >
        Drag and drop to reorder list
      </p>
    </>
  );
};

export default Footer;
