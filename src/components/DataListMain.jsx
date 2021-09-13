import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListHeader from './ListHeader';

const DataListMain = ({countries, setCountries }) => {

    const fetchCountry = () => {
        fetch(`https://restcountries.eu/rest/v2`)
          .then(response => response.json())
          .then(result => {
            setCountries(result)
          })
        }
        
        useEffect(() => {
          fetchCountry()
          // eslint-disable-next-line
      }, []);

    return (
      
        <section className="country-list-container"> 
            <ListHeader/>
            <section className="country-list">
             {countries.map((country, index) => {
                 return <Link to="/detail"><li className="country-item" key={index}>
                                <span>{country.name}
                                    <img src={country.flag} alt={country.flag} />
                                </span>
                                <span> {country.population.toLocaleString('en-US')}</span>
                                <span className="density"> {country.area == null ? "N/A" :
                                (country.population / country.area).toFixed(0)} people/sq km</span>
                              </li>
                        </Link>
                          })}
            </section>
        </section>

    )
}

export default DataListMain;
