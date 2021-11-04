import DataListMain from "../components/DataListMain"
import DataBtns from "../components/DataBtns";


const Main = ({ open, setOpen, countries, setCountries, fetchCountry, isLoading}) => {
    return (
        <section  className="main">
            <section className="app-container">
                <DataBtns 
                    open={open}
                    setOpen={setOpen}
                    countries={countries} 
                    setCountries={setCountries} 
                    fetchCountry={fetchCountry}
                />
                <DataListMain 
                    isLoading={isLoading}
                    countries={countries} 
                    setCountries={setCountries}
                />
            </section>
        </section>
    )
}

export default Main
