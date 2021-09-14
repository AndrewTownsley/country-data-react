import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const Detail = ({ countries }) => {
    const [countryDetail, setCountryDetail] = useState([]);
    const { name } = useParams()

    ////////////////////////////////////////////
    ////////////////////////////////////////////
    // ////////////////////////////////////////////
    // You Will Have to destructure the name property from the original fetch, and import it to this component
    // You Will Have to destructure the name property from the original fetch, and import it to this component
    // You Will Have to destructure the name property from the original fetch, and import it to this component
    // You Will Have to destructure the name property from the original fetch, and import it to this component
    ////////////////////////////////////////////
    ////////////////////////////////////////////
    ////////////////////////////////////////////



    




    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
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
            <div className="detail-main-content">
                <h1>{name}</h1>
                <h1>{name}</h1>
                <h1>{name}</h1>
                <h1>{name}</h1>
                <h1>{name}</h1>
                <h1>{name}</h1>
                <h1>{name}</h1>
                <h1>{name}</h1>
                <div className="detail-info">

                </div>
            </div>
        </div>
    )
}

export default Detail;
