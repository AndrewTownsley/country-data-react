import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const CountryItem = ({ country }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 620;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <>
        { width > breakPoint ? 
                <Link to={`/detail/${country.name}`}>
                <li className="country-item" key={country.index}>
                    <span className="country-item-img-name">{country.name}
                        <img src={country.flag} alt={country.flag} />
                    </span>
                    <span className="country-item-pop"> {country.population.toLocaleString('en-US')}</span>
                    <span className="density"> {country.area == null ? "N/A" :
                    (country.population / country.area).toFixed(0)} people/sq km</span>
                </li>
            </Link> 
            :
            <Link to={`/detail/${country.name}`}>
                <li className="country-item" key={country.index}>
                    <div>
                            <img src={country.flag} alt={country.flag} />
                        <span className="country-item-img-name"><h4>{country.name}</h4>
                        </span>
                    </div>
                    <div className="country-item-stats-mobile">
                        <span className="country-item-pop"><h5>Population: </h5> {country.population.toLocaleString('en-US')}</span>
                        <span className="density"><h5>Density: </h5> {country.area == null ? "N/A" :
                    (country.population / country.area).toFixed(0)} people/sq km</span>
                    </div>
                </li>
            </Link>
            } 
            </>
           )
    }

export default CountryItem;