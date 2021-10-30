import React, { useEffect } from 'react';
import ListHeader from './ListHeader';

const DataListMain = ({countries, setCountries }) => {

    // const fetchCountry = () => {
    //   console.log("Data List Main");
    //     fetch(`https://restcountries.com/v2/all`)
    //       .then(response => response.json())
    //       .then(result => {
    //         setCountries(result)
    //       })
    //     }
        
    //     useEffect(() => {
    //       fetchCountry()
    //       // eslint-disable-next-line
    //   }, []);

    return (
      
        <section className="country-list-container"> 
            <ListHeader/>
            <table className="country-list">
              <tbody>
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
</tbody>
</table>
        </section>

    )
}

export default DataListMain;
