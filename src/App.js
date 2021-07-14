import './App.css';
import React, { useState, useEffect } from 'react';
// Components
import DataBtns from "./components/DataBtns"
import DataListMain from "./components/DataListMain"

function App() {
  return (
    <main>
      <header className="header">
        <h1>Country Data</h1>
        <div className="dark-toggle">
          <button id="light" className="toggle-btn">Light</button>
          <button id="dark" className="toggle-btn">Dark</button>
        </div>
      </header>
        <section className="app-container">
        <DataBtns/>
        <DataListMain/>
        </section>
    </main>
  );
}

export default App;
