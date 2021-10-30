import './App.css';
import React, { useState, useEffect } from 'react';
import DataListMain from "./components/DataListMain"
import ToggleBtn from "./components/ToggleBtn";
import DataBtns from './components/DataBtns';
import RegionBtns from "./components/RegionBtns";
import { keepTheme } from './components/themes';

function App() {
  const [countries, setCountries] = useState([]);

  const fetchCountry = () => {
    fetch(`https://restcountries.eu/rest/v2`)
      .then(response => response.json())
      .then(result => {
        setCountries(result)
        console.log(result);
      })
      .catch((error) => console.log(error))
    }
    fetchCountry();
    
    useEffect(() => {
      fetchCountry();
  }, []);

  useEffect(() => {
    keepTheme();
  }, []);

  return (
    <main>
      <header className="header">
        <h1>CountryData.com</h1>
        <ToggleBtn fetchCountry={fetchCountry}/>
      </header>
      <RegionBtns
         setCountries={setCountries} 
         fetchCountry={fetchCountry}
         />
      <section className="app-container">
        <DataBtns 
          countries={countries} 
          setCountries={setCountries} 
          fetchCountry={fetchCountry}/>
        <DataListMain 
          countries={countries} 
          setCountries={setCountries}
        />
      </section>
    </main>
  );
}

export default App;
