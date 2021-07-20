import React, { useEffect } from 'react';
import RegionBtns from './RegionBtns';
import ListHeader from './ListHeader';

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

    return (
      
        <section className="country-list-container"> 
            <ListHeader/>
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