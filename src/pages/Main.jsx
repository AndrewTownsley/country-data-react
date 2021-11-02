import DataListMain from "../components/DataListMain"
import DataBtns from "../components/DataBtns";
import RegionBtns from "../components/RegionBtns";
import { keepTheme } from '../components/themes';



const Main = ({countries, setCountries, fetchCountry, fetchRegion, setFetchRegion, isLoading}) => {
    return (
        <section  className="main">
            {/* <RegionBtns
                fetchRegion={fetchRegion}
                setFetchRegion={setFetchRegion}
                setCountries={setCountries} 
                fetchCountry={fetchCountry}
            />  */}
            <section className="app-container">
                <DataBtns 
                    countries={countries} 
                    setCountries={setCountries} 
                    fetchCountry={fetchCountry}
                />
                <DataListMain 
                    isLoading={isLoading}
                    fetchRegion={fetchRegion}
                    setFetchRegion={setFetchRegion}
                    countries={countries} 
                    setCountries={setCountries}
                />
            </section>
        </section>
    )
}

export default Main
