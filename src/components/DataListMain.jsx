import React, { useEffect } from 'react';
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
            <table className="country-list">
              {countries.map((country, index) => {
         return <tr className="country-item" key={index}>
                  <td className="name">{country.name}
                      <img src={country.flag} alt={country.flag} />
                  </td>
                  <td> {country.population.toLocaleString('en-US')}</td>
                  <td className="density"> {country.area == null ? "N/A" :
                  (country.population / country.area).toFixed(0)} people/sq km</td>
                </tr>
})}
</table>
        </section>

    )
}

export default DataListMain;
