import React, { useEffect } from 'react';


function RegionBtns({ setCountries}) {

    console.log("Region Buttons");
    const fetchCountry = () => {
<<<<<<< HEAD
      console.log("Region Buttons Fetch");
=======
      console.log("Region Button Fetch");
>>>>>>> master
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
<<<<<<< HEAD
        fetch(`https://restcountries.com/v2/continent/europe`)
=======
      console.log("Europe Europe");
        fetch(`https://restcountries.com/v2/continent/europe
        `)
>>>>>>> master
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
<<<<<<< HEAD
        fetch(`https://restcountries.com/v2/continent/africa`)
=======
        console.log("Africa Africa");
        fetch(`https://restcountries.com/v2/continent/africa
        `)
>>>>>>> master
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
<<<<<<< HEAD
        fetch(`https://restcountries.com/v2/continent/europe`)
=======
        console.log("America America");
        fetch(`https://restcountries.com/v2/continent/americas
        `)
>>>>>>> master
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
<<<<<<< HEAD
        fetch(`https://restcountries.com/v2/continent/asia`)
=======
        console.log("Asia Asia");
        fetch(`https://restcountries.com/v2/continent/asia
        `)
>>>>>>> master
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