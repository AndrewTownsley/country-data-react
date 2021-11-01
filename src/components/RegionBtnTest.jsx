import React, { useState, useEffect } from 'react';


function RegionBtnTest({ setCountries}) {
    const [fetchRegion, setFetchRegion] = useState('')
    console.log(fetchRegion);

    useEffect(() => {
        const fetchCountryRegion = () => {
          console.log("Region Button Fetch");
            fetch(`https://restcountries.com/v2/continent/${fetchRegion}`)
              .then(response => response.json())
              .then(result => {
                setCountries(result)
              })
              .catch((error) => console.log(error))
            }
            
                fetchCountryRegion();
            }, [fetchRegion, setCountries])
        
 


    return (
        <div className="region-btn-container">
            <button onClick={setFetchRegion('europe')} className="region-btn">Europe</button>
            <button onClick={setFetchRegion('africa')} className="region-btn">Africa</button>
            <button onClick={setFetchRegion('americas')} className="region-btn">Americas</button>
            <button onClick={setFetchRegion('asia')} className="region-btn">Asia</button>
        </div>
        )
}

export default RegionBtnTest;