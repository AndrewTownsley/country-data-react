import './App.css';
import React, { useState, useEffect } from 'react';
import { keepTheme } from './components/themes';
// Components
import DataListMain from "./components/DataListMain"
import ToggleBtn from "./components/ToggleBtn";

function App() {
  const [countries, setCountries] = useState([]);

  const fetchCountry = () => {
    fetch(`https://restcountries.eu/rest/v2`)
      .then(response => response.json())
      .then(result => {
        setCountries(result)
      })
      .catch((error) => console.log("error"))
    }
    
    useEffect(() => {
      fetchCountry();
  }, []);
  
  const fetchEurope = () => {
    fetch(`https://restcountries.eu/rest/v2/region/europe`)
      .then(response => response.json())
      .then(result => {
        setCountries(result)
      })
      .catch((error) => console.log("error"))
    }
    
    useEffect(() => {
      fetchCountry();
  }, []);

  const fetchAfrica = () => {
    fetch(`https://restcountries.eu/rest/v2/region/africa`)
      .then(response => response.json())
      .then(result => {
        setCountries(result)
      })
      .catch((error) => console.log("error"))
    }
    
    useEffect(() => {
      fetchCountry();
  }, []);

  const fetchAmericas = () => {
    fetch(`https://restcountries.eu/rest/v2/region/Americas`)
      .then(response => response.json())
      .then(result => {
        setCountries(result)
      })
      .catch((error) => console.log("error"))
    }
    
    useEffect(() => {
      fetchCountry();
  }, []);

  const fetchAsia = () => {
    fetch(`https://restcountries.eu/rest/v2/region/Asia`)
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

  function filterEnglish() {
    let temp = [...countries]
    temp = temp.filter(country => country.languages[0].name == 'English')
    setCountries(temp);
    console.log(temp);
  }

  function resetCountryList() {
    fetchEurope();
  }

  useEffect(() => {
    keepTheme();
  }, []);

  return (
    <main>
      <header className="header">
        <h1>Country Data</h1>
          <ToggleBtn/>
      </header>
      <section className="app-container">
      <div className="btn-container">
                <button onClick={sortPopulation} className="data-btn">Sort by Population</button>
                <button onClick={sortDensity} className="data-btn">Sort by Density</button>
                <button onClick={filterMillions} className="data-btn">20m Population</button>
                <button onClick={filterEnglish} className="data-btn">Show English Speaking</button>
                <button onClick={resetCountryList} className="data-btn">Reset</button>
        
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
