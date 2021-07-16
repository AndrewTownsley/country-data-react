import './App.css';
import React, { useState, useEffect } from 'react';
// Components
// import DataBtns from "./components/DataBtns"
import DataListMain from "./components/DataListMain"

function App() {
  const [countries, setCountries] = useState([]);

  const fetchCountry = () => {
    fetch(`https://restcountries.eu/rest/v2/region/asia`)
      .then(response => response.json())
      .then(result => {
        setCountries(result)
      })
      .catch((err) => console.log("error"))
    }
    
    useEffect(() => {
      fetchCountry();
  }, []);

  function sortPopulation() {
    let temp = [...countries]
     temp.sort((a, b) => {
      return a.population > b.population ? -1 : 1;
    })
    setCountries(temp);
  }

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
      <div className="btn-container">
                <button onClick={sortPopulation} className="data-btn">Sort by Population</button>
                <button className="data-btn">Sort by Density</button>
                <button className="data-btn">20m Population</button>
                <button className="data-btn">Show English Speaking</button>
                <button className="data-btn">Reset</button>
      </div>
        <DataListMain 
          countries={countries} 
          setCountries={setCountries}
          sortPopulation={sortPopulation}
        />
      </section>
    </main>
  );
}

export default App;
