
function DataBtns({ open, setOpen, countries, setCountries }) {

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
            <button 
              onClick={ !open ? () => setOpen(true) : () => setOpen(false)} 
              className={open ? "mobile-menu-open active btn" : "mobile-menu-open btn"}
              open={open}
            >
              Filters 
            </button>
          <div className={open ? "btn-container active" : "btn-container"} open={open}>
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