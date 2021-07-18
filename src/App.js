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
      .catch((error) => console.log("error"))
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

  function sortDensity() {
    let temp = [...countries]
    temp.forEach((country) => {
      country.density = parseInt((country.population / country.area).toFixed(0))
    })
    temp.sort((a, b) => {
      return a.density > b.density ? -1 : 1;
  })
    setCountries(temp);
  }

  function filterMillions() {
    let temp = [...countries]
    temp = temp.filter((country) => {
      return country.population >= 20000000;
    })
    console.log(temp);
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
                <button onClick={sortDensity} className="data-btn">Sort by Density</button>
                <button onClick={filterMillions} className="data-btn">20m Population</button>
                <button className="data-btn">Show English Speaking</button>
                <button className="data-btn">Reset</button>
      </div>
        <DataListMain 
          countries={countries} 
          setCountries={setCountries}
        />
      </section>
    </main>
  );
}

export default App;
