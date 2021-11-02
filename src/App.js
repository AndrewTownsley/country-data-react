import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToggleBtn from './components/ToggleBtn'
import Loading from './components/Loading';
import Error from './components/Error';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { keepTheme } from './components/themes';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // const fetchCountry = () => {
  //   fetch(`https://restcountries.com/v2/all`)
  //   .then(response => response.json())
  //   .then(result => {
  //       setCountries(result)
  //     })
  //     .catch((error) => console.log(error))
  //   }

  useEffect(() => {
    const fetchCountry = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const response = await fetch(`https://restcountries.com/v2/all`);
        const results = await response.json();
        setCountries(results);
        console.log(results);
      }
      catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    }
    fetchCountry()
  }, [setCountries])

    
    useEffect(() => {
    // fetchCountry();
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
            <>
            {hasError && <Error/>}
            {isLoading ? (<Loading/>) :
              <Main
              isLoading={isLoading}
              country={country}
              setCountry={setCountry}
              countries={countries}
              setCountries={setCountries}
              // fetchCountry={fetchCountry}  
            />}
            </>
          </Route> 
          <Route path="/detail/:name">
            <>
          { isLoading ? (<Loading/>) :
             <Detail
                country={country}
                countries={countries}
                setCountry={setCountry}  
              />}
              </>
          </Route> 
         </Switch> 
      </main>
    </Router>
  );
}

export default App;



