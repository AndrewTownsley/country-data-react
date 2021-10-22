import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToggleBtn from './components/ToggleBtn'
import Main from './pages/Main';
// import Detail from './pages/Detail';
import { keepTheme } from './components/themes';

function App() {
  const [countries, setCountries] = useState([]);

  const fetchCountry = () => {
    fetch(`https://restcountries.com/v2/all`)
    .then(response => response.json())
    .then(result => {
        setCountries(result)
      console.log(result);
        console.log('hello is this thing on??');
      })
      .catch((error) => console.log(error))
    }

      // const fetchCountry = async () => {
      //   try {
      //     const response = await fetch(`https://restcountries.eu/rest/v3.1/all`)
      //       const data = response.json();
      //       setCountries(data)
      //       console.log(data);
      //     } catch (error) {
            
      //     }
      //   }

      //   useEffect(() => {
      //     fetchCountry();
      // }, []);
 


    

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
        {/* <Switch> */}
          {/* <Route exact path="/"> */}
            <Main
              countries={countries}
              setCountries={setCountries}
              fetchCountry={fetchCountry}  
            />
          {/* </Route> */}
          {/* <Route path="/detail/:name">
              <Detail
                countries={countries}  
              />
          </Route> */}
        {/* </Switch> */}
      </main>
    </Router>
  );
}

export default App;



