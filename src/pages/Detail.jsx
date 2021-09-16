import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const Detail = ({ countries, country }) => {
    const [countryDetail, setCountryDetail] = useState([]);
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


    useEffect(() => {
        const fetchCountryData = () => {
            fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
            .then(response => response.json())
            .then(result => setCountryDetail(result))
        }
        fetchCountryData();
    },[name])
    console.log(countryDetail);
    
    return (
        <div className="detail-main">
            <div className="btn-container">
                <Link to='/'><i className="fas fa-arrow-left">Back</i></Link>
            </div>
            {
                countryDetail.map((item) => 
                    

                     (
                        <article className="detail-card" key={item.numericCode}>
                            <img src={item.flag} alt={item.name} />
                            <div className="detail-card-stats">
                            <h1>{item.name}</h1>
                               <h5>Native Name: <span className="country-stats">{item.nativeName}</span></h5>
                               <h5>Population: <span className="country-stats">{item.population}</span></h5>
                               <h5>Region: <span className="country-stats">{item.region}</span></h5>
                               <h5>Sub Region: <span className="country-stats">{item.subregion}</span></h5>
                               <h5>Capital: <span className="country-stats">{item.capital}</span></h5>
                               <h5>Currencies: <span className="country-stats">{item.currencies[0].name}</span></h5>
                               <h5>Languages: <span className="country-stats">{item.languages[0].name}</span></h5>
                               <h5>Area: <span className="country-stats">{item.area}</span></h5>
                            </div>
                        </article>
                    )
                )
            }
        </div>
    )
}

export default Detail;
