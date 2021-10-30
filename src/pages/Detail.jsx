import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { keepTheme } from '../components/themes';


const Detail = ({ country, setCountry, countries }) => {
    // const [country, setCountry, countryDetail, setCountryDetail] = useState([]);
    const { name } = useParams()

    // useEffect(() => {
    //     const fetchCountryData = async () => {
    //         const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true
    //         `)
    //         const country = await response.json();
    //         setCountryDetail(country);
    //         console.log(country);
    //     }
    //     fetchCountryData()
    // }, [name])


    // useEffect(() => {
    //     const fetchCountryData = () => {
    //         fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    //         .then(response => response.json())
    //         .then(result => setCountryDetail(result))
    //     }
    //     fetchCountryData();
    // },[name])
    console.log(country);

    useEffect(() => {
        keepTheme()
    },[])
    
    return (
        <div className="detail-main">
            <div className="btn-container">
                <Link to='/'><i className="fas fa-arrow-left">Back</i></Link>
            </div>
                        <article className="detail-card" key={country.numericCode}>
                            <img src={country.flag} alt={country.name} />
                            <div className="detail-card-stats">
                            <h1>{country.name}</h1>
                               <h5>Native Name: <span className="country-stats">{country.nativeName}</span></h5>
                               <h5>Population: <span className="country-stats">{country.population}</span></h5>
                               <h5>Region: <span className="country-stats">{country.region}</span></h5>
                               <h5>Sub Region: <span className="country-stats">{country.subregion}</span></h5>
                               <h5>Capital: <span className="country-stats">{country.capital}</span></h5>
                               <h5>Currencies: <span className="country-stats">{country.currencies[0].name}</span></h5>
                               <h5>Languages: <span className="country-stats">{country.languages[0].name}</span></h5>
                               <h5>Area: <span className="country-stats">{country.area}</span></h5>
                            </div>
                        </article>
                    
                
        </div>
    )
}

export default Detail;
