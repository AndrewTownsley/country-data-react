{/* <table className="country-list">
{countries.map((country, index) => {
    return <tr className="country-item" key={index}>
       <td>{country.name}
           <img src={country.flag} alt={country.flag} />
       </td>
       <td> {country.population.toLocaleString('en-US')}</td>
       <td className="density"> {country.area == null ? "N/A" :
       (country.population / country.area).toFixed(0)} people/sq km</td>
    </tr>
})}
</table>

//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------

<section className="country-list">
{countries.map((country, index) => {
    return <li className="country-item" key={index}>
       <span>{country.name}
           <img src={country.flag} alt={country.flag} />
       </span>
       <span> {country.population.toLocaleString('en-US')}</span>
       <span className="density"> {country.area == null ? "N/A" :
       (country.population / country.area).toFixed(0)} people/sq km</span>
    </li>
})}
</section> */}