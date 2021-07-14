

const DataBtns = () => {

    return (
        <div className="btn-container">
            <button id="popSortBtn" className="data-btn">Sort by Population</button>
            <button id="densityBtn" className="data-btn">Sort by Density</button>
            <button id="twentyBtn" className="data-btn">20m Population</button>
            <button id="englishBtn" className="data-btn">Show English Speaking</button>
            <button id="resetBtn" className="data-btn">Reset</button>
        </div>
    )
}

export default DataBtns;