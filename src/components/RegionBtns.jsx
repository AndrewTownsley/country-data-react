import React, { useEffect } from 'react';


function RegionBtns({ setCountries}) {

    const fetchCountry = () => {
        fetch(`https://restcountries.com/v2/all`)
          .then(response => response.json())
          .then(result => {
            setCountries(result)
          })
          .catch((error) => console.log("error"))
        }
        
        useEffect(() => {
          fetchCountry();
          // eslint-disable-next-line
      }, []);

    const fetchEurope = () => {
        fetch(`https://restcountries.eu/rest/v2/region/europe`)
          .then(response => response.json())
          .then(result => {
            setCountries(result)
          })
        }
        
        useEffect(() => {
          fetchCountry();
          // eslint-disable-next-line
      }, []);
    
      const fetchAfrica = () => {
        fetch(`https://restcountries.eu/rest/v2/region/africa`)
          .then(response => response.json())
          .then(result => {
            setCountries(result)
          })
        }
        
        useEffect(() => {
          fetchCountry();
          // eslint-disable-next-line
      }, []);
    
      const fetchAmericas = () => {
        fetch(`https://restcountries.eu/rest/v2/region/Americas`)
          .then(response => response.json())
          .then(result => {
            setCountries(result)
          })
        }
        
        useEffect(() => {
          fetchCountry();
          // eslint-disable-next-line
      }, []);
    
      const fetchAsia = () => {
        fetch(`https://restcountries.eu/rest/v2/region/Asia`)
          .then(response => response.json())
          .then(result => {
            setCountries(result)
          })
        }
        
        useEffect(() => {
          fetchCountry();
          // eslint-disable-next-line
      }, []);


    return (
        <div className="region-btn-container">
            <button onClick={fetchEurope} className="region-btn">Europe</button>
            <button onClick={fetchAfrica} className="region-btn">Africa</button>
            <button onClick={fetchAmericas} className="region-btn">Americas</button>
            <button onClick={fetchAsia} className="region-btn">Asia</button>
        </div>
        )
}

export default RegionBtns;