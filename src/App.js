import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToggleBtn from './components/ToggleBtn'
import Main from './pages/Main';
import Detail from './pages/Detail';
import { keepTheme } from './components/themes';

function App() {
  const [countries, setCountries] = useState([]);

  const fetchCountry = () => {
    fetch(`https://restcountries.eu/rest/v2`)
      .then(response => response.json())
      .then(result => {
        setCountries(result)
      })
      .catch((error) => console.log("error"))
    }
    
    useEffect(() => {
      fetchCountry();
  }, []);

  useEffect(() => {
    keepTheme();
  }, []);

  return (
    <Router>
      <main>
        <header className="header">
          <h1>CountryData.com</h1>
          <ToggleBtn/>
        </header>
        <Switch>
          <Route exact path="/">
            <Main
              countries={countries}
              setCountries={setCountries}
              fetchCountry={fetchCountry}  
            />
          </Route>
          <Route path="/detail" component={Detail}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;



