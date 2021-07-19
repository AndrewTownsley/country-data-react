import React, { useState, useEffect } from 'react';

const DataListMain = ({countries, setCountries }) => {

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


    return (
      
        <section className="country-list-container">
             <div className="region-btn-container">
              <button onClick={fetchEurope} className="region-btn">Europe</button>
              <button onClick={fetchAfrica} className="region-btn">Africa</button>
              <button onClick={fetchAmericas} className="region-btn">Americas</button>
              <button onClick={fetchAsia} className="region-btn">Asia</button>
          </div>
            <header className="country-list-header">
                <h2>Country</h2>
                <h2>Population</h2>
                <h2>Density</h2>
            </header>
            <section className="country-list">
             {countries.map((country, index) => {
                 return <li className="country-item" key={index}>
                    <span>{country.name}
                        <img src={country.flag} alt={country.flag} />
                    </span>
                    <span> {country.population.toLocaleString('en-US')}</span>
                    <span className="density"> {country.area == null ? "N/A" :
                    (country.population / country.area).toFixed(0)} people/sq km</span>
                 </li>
             })}
            </section>
        </section>

    )
}

export default DataListMain;