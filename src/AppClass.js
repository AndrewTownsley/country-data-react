import './App.css';
import React, { useState, useEffect } from 'react';
import { news_categories } from './data';

function AppClass(event) {
    // let search = document.querySelector("#search")
    const [articles, setArticles] = useState([]);
    let apiKey = "2d501f81d2574b03aff509bf28d4fcfa";    
    const url = (`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);

    async function fetchNews() {
        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
        setArticles(data.articles)
    }

    useEffect(() => {
        fetchNews()
    }, [])
;

    return (
        <div>
            <p>search for news</p>
            <input type="text" name="search" id="search" />
            <select name="category" id="category ">
                {news_categories.map((category, index) => {
                     return <option key={index} value={category}>{category}</option>
                    })}
            </select>
            <button onClick={fetchNews}>Search</button>
            <ul>
                {articles.length ? 
                articles.map((article, index) => {
                    return <li key={article.url}>{article.title}</li>
                }) : <p>No Results</p>
                }
            </ul>
        </div>
    )
}

export default AppClass;