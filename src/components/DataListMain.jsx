import React, { useState } from "react";

const DataListMain = () => {
    const [countryData, setCountryData] = useState([]);

    function fetchCountry() {
        fetch(`https://restcountries.eu/rest/v2/region/asia`)
            .then(response => response.json())
            .then(data => (data))
            }

    return (
        <section onLoad={fetchCountry()} className="country-list-container">
            <header className="country-list-header">
                <h2>Country</h2>
                <h2>Population</h2>
                <h2>Density</h2>
            </header>
            <section id="countryList" className="country-list">
             {}
            </section>
        </section>
    )
}

export default DataListMain;