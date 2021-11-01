
function DataBtns({ countries, setCountries, fetchCountry}) {
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
        console.log('Reset Countries');
      }
      
      return (
          <div className="btn-container">
            <button onClick={sortPopulation} className="data-btn">Sort by Population</button>
            <button onClick={sortDensity} className="data-btn">Sort by Density</button>
            <button onClick={filterMillions} className="data-btn">20m Population</button>
            <button onClick={filterEnglish} className="data-btn">English Speaking</button>
            <button onClick={resetCountryList} className="data-btn">Reset</button>
        </div>
    )
}
export default DataBtns;