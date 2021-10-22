import React, { useEffect } from 'react';
import ListHeader from './ListHeader';
import CountryItem from './CountryItem';

const DataListMain = ({countries, setCountries }) => {

    const fetchCountry = () => {
        fetch(`https://restcountries.com/v2/all`)
          .then(response => response.json())
          .then(result => {
            setCountries(result)
          })
        }
        
      //   useEffect(() => {
      //     fetchCountry()
      //     // eslint-disable-next-line
      // }, []);

    return (
      
        <section className="country-list-container"> 
                <ListHeader/>
                <section className="country-list">
                    {countries.map((country, index) => {
                      return <CountryItem
                      key={country.numericCode}
                      countries={countries}
                      country={country}
                      index={index}
               />
              })}
                </section>
        </section>

    )
}

export default DataListMain;
