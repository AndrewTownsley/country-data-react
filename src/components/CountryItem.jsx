import { Link, useParams } from 'react-router-dom';


const CountryItem = ({ country }) => {
    const { name } = useParams();

    return (
            <Link to={`/detail/${country.name}`}>
                <li className="country-item" key={country.index}>
                    <span>{country.name}
                        <img src={country.flag} alt={country.flag} />
                    </span>
                    <span className="country-item-pop"> {country.population.toLocaleString('en-US')}</span>
                    <span className="density"> {country.area == null ? "N/A" :
                    (country.population / country.area).toFixed(0)} people/sq km</span>
                </li>
            </Link> 
           )
    }

export default CountryItem;