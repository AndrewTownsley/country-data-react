
const CountryItem = ({ countries }) => {

    return (
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
    )
}

export default CountryItem;