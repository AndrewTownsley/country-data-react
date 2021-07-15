
const DataListMain = ({countries}) => {

    return (
        <section className="country-list-container">
            <header className="country-list-header">
                <h2>Country</h2>
                <h2>Population</h2>
                <h2>Density</h2>
            </header>
            <section id="countryList" className="country-list">
             {countries.map((country, index) => {
                 return <li className="country-item" key={index}>
                    <span>{country.name}<img src={country.flag} alt={country.flag} /></span>
                    
                    <span> {country.population.toLocaleString('en-US')}</span>
                    <span className="density"> {country.area == null ? "N/A" :
                    (country.population / country.area).toFixed(0)} people/SQ km</span>
                 </li>
             })}
            </section>
        </section>
    )
}

export default DataListMain;