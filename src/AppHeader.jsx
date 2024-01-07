import React from "react";
import "./AppHeader.css";

function AppHeader() {
  return (
    <header className="app-header">
      <h1 className="app-heading">CV Generator App</h1>
      <nav className="app-header-nav">
        <ul className="button-list">
          <button type="button">Layout</button>
          <button type="button">Light/Dark</button>
          <button type="button">PDF</button>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
