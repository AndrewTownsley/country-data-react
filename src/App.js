import './App.css';
import React, { useState, useEffect } from 'react';
// Components
import DataBtns from "./components/DataBtns"
import DataListMain from "./components/DataListMain"

function App() {
  const [countries, setCountries] = useState([]);

  const fetchCountry = async () => {
    const data = await fetch(`https://restcountries.eu/rest/v2/region/asia`)
      .then(response => response.json());
      
      setCountries(data)
  }
  useEffect(() => {
    fetchCountry();
  }, []);
  
  console.log(countries);

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
        <DataListMain countries={countries}/>
        </section>
    </main>
  );
}

export default App;
