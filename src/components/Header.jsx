import React from "react";

const Header = ({ toggleMode, mode }) => {
  return (
    <header className="text-center py-8 text-4xl font-bold text-white tracking-wider">
      <section className="flex flex-row justify-between">
        <h1>TODO</h1>
        <button onClick={toggleMode}>
          <img
            src={`${
              mode
                ? "src/assets/images/icon-sun.svg"
                : "src/assets/images/icon-moon.svg"
            }`}
            alt={`${mode ? "Change to light mode" : "Change to dark mode"}`}
          />
        </button>
      </section>
    </header>
  );
};

export default Header;
