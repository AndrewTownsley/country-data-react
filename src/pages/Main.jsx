import DataListMain from "../components/DataListMain"
import DataBtns from "../components/DataBtns";
import RegionBtns from "../components/RegionBtns";
import { keepTheme } from '../components/themes';



const Main = ({countries, setCountries, fetchCountry}) => {
    return (
        <section  className="main">
            <RegionBtns
                setCountries={setCountries} 
                fetchCountry={fetchCountry}
            /> 
            <section className="app-container">
                <DataBtns 
                    countries={countries} 
                    setCountries={setCountries} 
                    fetchCountry={fetchCountry}
                />
                <DataListMain 
                    countries={countries} 
                    setCountries={setCountries}
                />
            </section>
        </section>
    )
}

export default Main
