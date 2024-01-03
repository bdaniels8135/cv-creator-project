import React from "react";

function PageHeader() {
  return (
    <header>
      <h1>CV Generator App</h1>
      <nav>
        <ul>
          <button type='button'>Customize Layout</button>
          <button type='button'>Toggle light/dark mode</button>
          <button type='button'>download/preview/print pdf</button>
        </ul>
      </nav>
    </header>
  )
}

export default PageHeader