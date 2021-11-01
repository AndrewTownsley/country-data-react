import './App.css';
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToggleBtn from './components/ToggleBtn'
import Main from './pages/Main';
import Detail from './pages/Detail';
=======
import DataListMain from "./components/DataListMain"
import ToggleBtn from "./components/ToggleBtn";
import DataBtns from './components/DataBtns';
import RegionBtnTest from "./components/RegionBtnTest";
>>>>>>> master
import { keepTheme } from './components/themes';

function App() {
  const [countries, setCountries] = useState([]);
<<<<<<< HEAD
  const [country, setCountry] = useState('');

  const fetchCountry = () => {
    fetch(`https://restcountries.com/v2/all`)
    .then(response => response.json())
    .then(result => {
=======
  const [fetchRegion, setFetchRegion] = useState('');

  const fetchCountry = () => {
    console.log("App FetchCountry");
    fetch(`https://restcountries.com/v2/all`)
      .then(response => response.json())
      .then(result => {
>>>>>>> master
        setCountries(result)
        console.log(result);
      })
      .catch((error) => console.log(error))
    }

<<<<<<< HEAD

      // const fetchCountry = async () => {
      //   try {
      //     const response = await fetch(`https://restcountries.eu/rest/v3.1/all`)
      //       const data = response.json();
      //       setCountries(data)
      //       console.log(data);
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   }

      //   useEffect(() => {
      //     fetchCountry();
      // }, []);
 

  useEffect(() => {
=======
    
    useEffect(() => {
>>>>>>> master
    fetchCountry();
    keepTheme();
  }, []);

  return (
<<<<<<< HEAD
    <Router>
      <main>
        <header className="header">
          <h1>CountryData.com</h1>
          <ToggleBtn/>
        </header>
        <Switch>
          <Route exact path="/">
            <Main
              country={country}
              setCountry={setCountry}
              countries={countries}
              setCountries={setCountries}
              fetchCountry={fetchCountry}  
            />
          </Route> 
          <Route path="/detail/:name">
              <Detail
                country={country}
                countries={countries}
                setCountry={setCountry}  
              />
          </Route> 
         </Switch> 
      </main>
    </Router>
=======
    <main>
      <header className="header">
        <h1>CountryData.com</h1>
        <ToggleBtn fetchCountry={fetchCountry}/>
      </header>
      {/* <RegionBtnTest
         countries={countries}
         setCountries={setCountries} 
         fetchCountry={fetchCountry}
         /> */}
      <section className="app-container">
        <DataBtns 
          countries={countries} 
          setCountries={setCountries} 
          fetchCountry={fetchCountry}/>
        <DataListMain 
          countries={countries} 
          setCountries={setCountries}
        />
      </section>
    </main>
>>>>>>> master
  );
}

export default App;



