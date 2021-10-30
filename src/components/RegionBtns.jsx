import React, { useEffect } from 'react';


function RegionBtns({ setCountries}) {

    const fetchCountry = () => {
      console.log("Region Button Fetch");
        fetch(`https://restcountries.com/v2/all`)
          .then(response => response.json())
          .then(result => {
            setCountries(result)
          })
          .catch((error) => console.log(error))
        }
        
        useEffect(() => {
          fetchCountry();
          // eslint-disable-next-line
      }, []);

    const fetchEurope = () => {
      console.log("Europe Europe");
        fetch(`https://restcountries.com/v2/continent/europe
        `)
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
        console.log("Africa Africa");
        fetch(`https://restcountries.com/v2/continent/africa
        `)
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
        console.log("America America");
        fetch(`https://restcountries.com/v2/continent/americas
        `)
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
        console.log("Asia Asia");
        fetch(`https://restcountries.com/v2/continent/asia
        `)
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