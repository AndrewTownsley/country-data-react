

const DataBtns = ({ countries, setCountries }) => {

    function sortPopulation() {
        countries.sort((a, b) => {
            return a.population > b.population ? -1 : 1;
        })
        setCountries(countries)
    }

    // function sortDensity



    return (
        <div className="btn-container">
            <button onClick={sortPopulation} className="data-btn">Sort by Population</button>
            {/* <button onClick={} className="data-btn">Sort by Density</button>
            <button onClick={} className="data-btn">20m Population</button>
            <button onClick={} className="data-btn">Show English Speaking</button>
            <button id="resetBtn" className="data-btn">Reset</button> */}
        </div>
    )
}

export default DataBtns;