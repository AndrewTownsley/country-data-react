import './App.css';
import React, { useState, useEffect } from 'react';
import DataListMain from "./components/DataListMain"
import ToggleBtn from "./components/ToggleBtn";
import DataBtns from './components/DataBtns';
import RegionBtnTest from "./components/RegionBtnTest";
import { keepTheme } from './components/themes';

function App() {
  const [countries, setCountries] = useState([]);
  const [fetchRegion, setFetchRegion] = useState('');

  const fetchCountry = () => {
    console.log("App FetchCountry");
    fetch(`https://restcountries.com/v2/all`)
      .then(response => response.json())
      .then(result => {
        setCountries(result)
        console.log(result);
      })
      .catch((error) => console.log(error))
    }

    
    useEffect(() => {
    fetchCountry();
    keepTheme();
  }, []);

  return (
    <main>
      <header className="header">
        <h1>CountryData.com</h1>
        <ToggleBtn fetchCountry={fetchCountry}/>
      </header>
      {/* <RegionBtnTest
         countries={countries}
         setCountries={setCountries} 
         fetchCountry={fetchCountry}
         /> */}
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
