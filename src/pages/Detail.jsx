import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const Detail = ({ countries, country }) => {
    const [countryDetail, setCountryDetail] = useState([]);
    const { name } = useParams()

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true
            `)
            const country = await response.json();
            setCountryDetail(country);
            console.log(country);
        }
        fetchCountryData()
    }, [name])

    return (
        <div className="detail-main">
            <div className="btn-container">
                <Link to='/'><i className="fas fa-arrow-left">Back</i></Link>
            </div>
            {
                countryDetail.map((item) => {
                    const {
                        name,
                        flag,
                        nativeName,
                        population,
                        capital,
                        region,
                        subregion,
                        languages,
                        currency,
                        area,
                        borders,
                    } = item;

                    return  (
                        <article className="detail-card">
                            <img src={flag} alt={name} />
                            <div className="detail-card-stats">
                            <h1>{name}</h1>
                               <h5>Native Name: <span className="country-stats">{nativeName}</span></h5>
                               <h5>Population: <span className="country-stats">{population}</span></h5>
                               <h5>Region: <span className="country-stats">{region}</span></h5>
                               <h5>Sub Region: <span className="country-stats">{subregion}</span></h5>
                               <h5>Capital: <span className="country-stats">{capital}</span></h5>
                               <h5>Currencies: <span className="country-stats">{currency}</span></h5>
                               <h5>Languages: <span className="country-stats">{languages}</span></h5>
                               <h5>Area: <span className="country-stats">{area}</span></h5>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default Detail;
