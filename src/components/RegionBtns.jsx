import React, { useEffect } from 'react';


function RegionBtns({ setCountries, fetchRegion, setFetchRegion }) {


  useEffect(() => {
    const fetchCountry = () => {
        fetch(`https://restcountries.com/v2/${fetchRegion}`)
          .then(response => response.json())
          .then(result => {
            setCountries(result)
          })
          .catch((error) => console.log(error))
        }
        
          fetchCountry();
          // eslint-disable-next-line
      }, []);


    // const fetchEurope = () => {
    //     fetch(`https://restcountries.com/v2/continent/europe`)
    //       .then(response => response.json())
    //       .then(result => {
    //         setCountries(result)
    //         console.log(result);
    //       })
    //       .catch((error) => console.log(error))
    //     }
        
      //   useEffect(() => {
      //     fetchCountry();
      //     // eslint-disable-next-line
      // }, []);
    
   
        
      //   useEffect(() => {
      //     fetchCountry();
      //     // eslint-disable-next-line
      // }, []);
    
      // const fetchAmericas = () => {
      //   fetch(`https://restcountries.com/v2/continent/americas`)
      //     .then(response => response.json())
      //     .then(result => {
      //       setCountries(result)
      //     })
      //     .catch((error) => console.log(error))
      //   }
        
      //   useEffect(() => {
      //     fetchCountry();
      //     // eslint-disable-next-line
      // }, []);
    
      // const fetchAsia = () => {
      //   fetch(`https://restcountries.com/v2/continent/asia  `)
      //     .then(response => response.json())
      //     .then(result => {
      //       setCountries(result)
      //     })
      //     .catch((error) => console.log(error))
      //   }
        
      //   useEffect(() => {
      //     fetchCountry();
      //     // eslint-disable-next-line
      // }, []);


    return (
        <div className="region-btn-container">
            <button onClick={() => setFetchRegion('europe')} className="region-btn">Europe</button>
            <button onClick={() => setFetchRegion('africa')} className="region-btn">Africa</button>
            <button onClick={() => setFetchRegion('americas')} className="region-btn">Americas</button>
            <button onClick={() => setFetchRegion('asia')} className="region-btn">Asia</button>
        </div>
        )
}

export default RegionBtns;