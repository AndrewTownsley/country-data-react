import DataListMain from "../components/DataListMain"
import DataBtns from "../components/DataBtns";
import RegionBtns from "../components/RegionBtns";
import { keepTheme } from '../components/themes';



const Main = ({countries, setCountries, fetchCountry}) => {
    return (
        <section className="app-container">
            <RegionBtns
                setCountries={setCountries} 
                fetchCountry={fetchCountry}
            /> 
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
    )
}

export default Main
