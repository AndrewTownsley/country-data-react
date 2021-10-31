import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { keepTheme } from '../components/themes';


const Detail = ({ setCountry, countries }) => {
    const [ countryDetail, setCountryDetail] = useState([]);
    const { name } = useParams()
    const params = useParams()


    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(`https://restcountries.com/v2/name/${name}?fullText=true

            `)
            const country = await response.json();
            setCountryDetail(country);
            console.log(country);
        }
        fetchCountryData()
    }, [name])
    console.log(countryDetail);
    console.log(countryDetail.area);


    // useEffect(() => {
    //     const fetchCountryData = () => {
    //         fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    //         .then(response => response.json())
    //         .then(result => setCountryDetail(result))
    //     }
    //     fetchCountryData();
    // },[name])

    useEffect(() => {
        keepTheme()
    },[])
    
    return (
        <div className="detail-main">
            <div className="btn-container">
                <Link to='/'><i className="fas fa-arrow-left">Back</i></Link>
            </div>
                {   countryDetail.map((country) => 
                      <article className="detail-card" key={country.numericCode}>
                            <img src={country.flag} alt={country.name} />
                            <div className="detail-card-stats">
                            <h1>{country.name}</h1>
                            <h2>{JSON.stringify(params)}</h2>
                               <h5>Native Name: <span className="country-stats">{country.nativeName}</span></h5>
                               <h5>Population: <span className="country-stats">{country.population}</span></h5>
                               <h5>Region: <span className="country-stats">{country.region}</span></h5>
                               <h5>Sub Region: <span className="country-stats">{country.subregion}</span></h5>
                               <h5>Capital: <span className="country-stats">{country.capital}</span></h5>
                               {/* <h5>Currencies: <span className="country-stats">{country.currencies[0].name}</span></h5>
                               <h5>Languages: <span className="country-stats">{country.languages[0].name}</span></h5> */}
                               <h5>Area: <span className="country-stats">{country.area}</span></h5>
                            </div>
                        </article>
                            )  
                        }
                    
                    
                    </div>
                    )
}

export default Detail;
