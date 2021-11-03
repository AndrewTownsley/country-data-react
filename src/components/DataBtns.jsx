
function DataBtns({ countries, setCountries }) {

  const fetchCountry = () => {
    fetch(`https://restcountries.com/v2/all`)
    .then(response => response.json())
    .then(result => {
        setCountries(result)
      })
      .catch((error) => console.log(error))
    }

    function sortPopulation() {
        let temp = [...countries]
         temp.sort((a, b) => {
          return a.population > b.population ? -1 : 1;
        })
        setCountries(temp);
      }
    
      function sortDensity() {
        let temp = [...countries]
        temp.forEach((country) => {
          country.density = parseInt((country.population / country.area).toFixed(0))
        })
        temp.sort((a, b) => {
          return a.density > b.density ? -1 : 1;
      })
        setCountries(temp);
      }
    
      function filterMillions() {
        let temp = [...countries]
        temp = temp.filter((country) => {
          return country.population >= 20000000;
        })
        setCountries(temp);
      }
    
      function filterEnglish() {
        let temp = [...countries]
        temp = temp.filter(country => country.languages[0].name === 'English')
        setCountries(temp);
      }
    
      function resetCountryList() {
        fetchCountry();
      }
      
      return (
        <>
              <button className="mobile-menu-open btn">Filters <i className="fas fa-arrow-right"></i></button>
          <div className="btn-container">
            <button onClick={sortPopulation} className="data-btn btn">Sort by Population</button>
            <button onClick={sortDensity} className="data-btn btn">Sort by Density</button>
            <button onClick={filterMillions} className="data-btn btn">20m Population</button>
            <button onClick={filterEnglish} className="data-btn btn">English Speaking</button>
            <button onClick={resetCountryList} className="data-btn btn">Reset</button>
        </div>
        </>
    )
}
export default DataBtns;